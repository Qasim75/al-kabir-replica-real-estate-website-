import React from 'react';
import { FaTrash, FaInbox } from 'react-icons/fa';

/**
 * columns: [{ key, label, render?(row) }]
 * rows: array of data objects (must include _id)
 * onDelete: optional (row) => void
 */
const DataTable = ({ columns, rows, loading, error, onDelete, emptyLabel = 'No records yet' }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
        {error}
      </div>
    );
  }

  if (!rows || rows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-slate-400">
        <FaInbox className="text-3xl mb-3" />
        <p>{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700 text-left text-slate-500 dark:text-slate-400 uppercase text-xs tracking-wider">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 font-semibold whitespace-nowrap">
                {col.label}
              </th>
            ))}
            {onDelete && <th className="px-4 py-3" />}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
          {rows.map((row) => (
            <tr key={row._id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-slate-700 dark:text-slate-300 align-top">
                  {col.render ? col.render(row) : (row[col.key] ?? '—')}
                </td>
              ))}
              {onDelete && (
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => onDelete(row)}
                    title="Delete"
                    className="text-slate-400 hover:text-red-500 transition p-2 rounded-lg hover:bg-red-50"
                  >
                    <FaTrash />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
