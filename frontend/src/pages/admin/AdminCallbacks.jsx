import React, { useCallback, useEffect, useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import api from '../../utils/api';
import DataTable from '../../components/admin/DataTable';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { formatDate } from '../../utils/format';

const STATUS_OPTIONS = ['pending', 'contacted', 'closed'];

const statusBadge = (status) => {
  const styles = {
    pending: 'bg-amber-100 text-amber-700',
    contacted: 'bg-blue-100 text-blue-700',
    closed: 'bg-emerald-100 text-emerald-700',
  };
  return `px-2.5 py-1 rounded-full text-xs font-semibold capitalize border-0 cursor-pointer ${styles[status] || 'bg-slate-100 text-slate-600'}`;
};

const AdminCallbacks = () => {
  useDocumentTitle('Callback Requests');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/callback');
      setRows(res.data.data || []);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load callback requests');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = async (row, status) => {
    setUpdatingId(row._id);
    const prevRows = rows;
    setRows((prev) => prev.map((r) => (r._id === row._id ? { ...r, status } : r)));
    try {
      await api.patch(`/callback/${row._id}`, { status });
    } catch (err) {
      setRows(prevRows);
      alert(err.response?.data?.error || 'Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (row) => {
    if (!window.confirm('Delete this callback request? This cannot be undone.')) return;
    try {
      await api.delete(`/callback/${row._id}`);
      setRows((prev) => prev.filter((r) => r._id !== row._id));
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to delete record');
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Callback Requests</h1>
          <p className="text-slate-500 dark:text-slate-400">People who asked to be called back. Update status as you follow up.</p>
        </div>
        <button
          onClick={fetchData}
          className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg transition"
        >
          <FaSyncAlt className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'phone', label: 'Phone' },
          { key: 'projectName', label: 'Project', render: (r) => r.projectName || '—' },
          { key: 'preferredTime', label: 'Preferred Time', render: (r) => r.preferredTime || '—' },
          {
            key: 'status',
            label: 'Status',
            render: (r) => (
              <select
                value={r.status}
                disabled={updatingId === r._id}
                onChange={(e) => handleStatusChange(r, e.target.value)}
                className={statusBadge(r.status)}
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            ),
          },
          { key: 'createdAt', label: 'Submitted', render: (r) => formatDate(r.createdAt) },
        ]}
        rows={rows}
        loading={loading}
        error={error}
        emptyLabel="No callback requests yet"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminCallbacks;
