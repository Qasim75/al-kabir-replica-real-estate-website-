import React, { useCallback, useEffect, useState } from 'react';
import { FaSyncAlt, FaPlus } from 'react-icons/fa';
import api from '../../utils/api';
import DataTable from '../../components/admin/DataTable';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { formatDate } from '../../utils/format';

const emptyForm = { registrationNumber: '', ownerName: '', projectName: '', plotSize: '', status: 'Verified' };

const AdminVerifications = () => {
  useDocumentTitle('Verification Records');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/verify');
      setRows(res.data.data || []);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load verification records');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (row) => {
    if (!window.confirm('Delete this verification record? This cannot be undone.')) return;
    try {
      await api.delete(`/verify/record/${row._id}`);
      setRows((prev) => prev.filter((r) => r._id !== row._id));
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to delete record');
    }
  };

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (!form.registrationNumber || !form.ownerName || !form.projectName) {
      setFormError('Registration number, owner name, and project name are required.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await api.post('/verify', form);
      setRows((prev) => [res.data.data, ...prev]);
      setForm(emptyForm);
      setShowForm(false);
    } catch (err) {
      setFormError(err.response?.data?.error || 'Failed to create verification record');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Verification Records</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Records customers can look up on the public Payment Verification page.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowForm((s) => !s)}
            className="flex items-center gap-2 text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg transition"
          >
            <FaPlus /> {showForm ? 'Cancel' : 'Add Record'}
          </button>
          <button
            onClick={fetchData}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg transition"
          >
            <FaSyncAlt className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 mb-6 space-y-4">
          {formError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {formError}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Registration Number *</label>
              <input
                name="registrationNumber"
                value={form.registrationNumber}
                onChange={handleFormChange}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Owner Name *</label>
              <input
                name="ownerName"
                value={form.ownerName}
                onChange={handleFormChange}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Project Name *</label>
              <input
                name="projectName"
                value={form.projectName}
                onChange={handleFormChange}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Plot Size</label>
              <input
                name="plotSize"
                value={form.plotSize}
                onChange={handleFormChange}
                placeholder="e.g. 5 Marla"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-bold px-6 py-2.5 rounded-lg transition"
          >
            {submitting ? 'Saving...' : 'Save Record'}
          </button>
        </form>
      )}

      <DataTable
        columns={[
          { key: 'registrationNumber', label: 'Registration #' },
          { key: 'ownerName', label: 'Owner' },
          { key: 'projectName', label: 'Project' },
          { key: 'plotSize', label: 'Plot Size', render: (r) => r.plotSize || '—' },
          { key: 'status', label: 'Status' },
          { key: 'createdAt', label: 'Added', render: (r) => formatDate(r.createdAt) },
        ]}
        rows={rows}
        loading={loading}
        error={error}
        emptyLabel="No verification records yet"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminVerifications;
