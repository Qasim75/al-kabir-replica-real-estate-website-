import React, { useCallback, useEffect, useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import api from '../../utils/api';
import DataTable from './DataTable';

/**
 * Generic list page for a simple CRUD-ish admin resource.
 *
 * props:
 *  - title, subtitle
 *  - endpoint: e.g. '/contact'
 *  - columns: DataTable columns
 *  - deletable: boolean (default true)
 *  - deleteEndpoint: (row) => string, defaults to `${endpoint}/${row._id}`
 *  - extraActions: optional render(row) for a custom action column, rendered via columns instead
 *  - renderExtra: optional (data, refetch) => JSX, rendered above the table (e.g. an "add new" form)
 */
const AdminListPage = ({
  title,
  subtitle,
  endpoint,
  columns,
  deletable = true,
  deleteEndpoint,
  renderExtra,
  emptyLabel,
}) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(endpoint);
      setRows(res.data.data || []);
    } catch (err) {
      setError(err.response?.data?.error || `Failed to load ${title.toLowerCase()}`);
    } finally {
      setLoading(false);
    }
  }, [endpoint, title]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (row) => {
    if (!window.confirm('Delete this record? This cannot be undone.')) return;
    setDeletingId(row._id);
    try {
      const url = deleteEndpoint ? deleteEndpoint(row) : `${endpoint}/${row._id}`;
      await api.delete(url);
      setRows((prev) => prev.filter((r) => r._id !== row._id));
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to delete record');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{title}</h1>
          {subtitle && <p className="text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
        <button
          onClick={fetchData}
          className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg transition"
        >
          <FaSyncAlt className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      {renderExtra && renderExtra(rows, fetchData)}

      <DataTable
        columns={columns}
        rows={rows}
        loading={loading}
        error={error}
        emptyLabel={emptyLabel}
        onDelete={deletable ? handleDelete : undefined}
      />
      {deletingId && <p className="text-xs text-slate-400 mt-2">Deleting…</p>}
    </div>
  );
};

export default AdminListPage;
