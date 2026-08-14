import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaMoneyBillWave,
  FaFileAlt,
  FaCertificate,
  FaBell,
  FaPhoneVolume,
} from 'react-icons/fa';
import api from '../../utils/api';
import useDocumentTitle from '../../utils/useDocumentTitle';

const CARDS = [
  { key: 'contacts', label: 'Contact Messages', to: '/admin/contacts', icon: FaEnvelope, color: 'from-blue-500 to-blue-700' },
  { key: 'payments', label: 'Payment Submissions', to: '/admin/payments', icon: FaMoneyBillWave, color: 'from-emerald-500 to-emerald-700' },
  { key: 'adjustmentForms', label: 'Adjustment Forms', to: '/admin/adjustment-forms', icon: FaFileAlt, color: 'from-indigo-500 to-indigo-700' },
  { key: 'verifications', label: 'Verification Records', to: '/admin/verifications', icon: FaCertificate, color: 'from-amber-500 to-amber-700' },
  { key: 'newsletter', label: 'Newsletter Subscribers', to: '/admin/newsletter', icon: FaBell, color: 'from-purple-500 to-purple-700' },
  { key: 'callbacks', label: 'Callback Requests', to: '/admin/callbacks', icon: FaPhoneVolume, color: 'from-rose-500 to-rose-700' },
];

const AdminOverview = () => {
  useDocumentTitle('Admin Overview');
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await api.get('/admin/stats');
        if (!cancelled) setStats(res.data.data);
      } catch (err) {
        if (!cancelled) setError(err.response?.data?.error || 'Failed to load stats');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Overview</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">A quick summary of everything submitted through the website.</p>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.key}
              to={card.to}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-700 p-6 transition duration-200 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white text-xl shrink-0`}>
                <Icon />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 dark:text-white">
                  {loading ? '—' : stats?.[card.key] ?? 0}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{card.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminOverview;
