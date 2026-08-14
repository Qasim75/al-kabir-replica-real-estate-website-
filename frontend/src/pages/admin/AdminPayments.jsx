import React from 'react';
import AdminListPage from '../../components/admin/AdminListPage';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { formatDate } from '../../utils/format';

const statusBadge = (status) => {
  const styles = {
    completed: 'bg-emerald-100 text-emerald-700',
    pending: 'bg-amber-100 text-amber-700',
    failed: 'bg-red-100 text-red-700',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${styles[status] || 'bg-slate-100 text-slate-600'}`}>
      {status || 'pending'}
    </span>
  );
};

const AdminPayments = () => {
  useDocumentTitle('Payment Submissions');
  return (
    <AdminListPage
      title="Payment Submissions"
      subtitle="Online payment details submitted by customers."
      endpoint="/payments"
      emptyLabel="No payment submissions yet"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
        { key: 'projectName', label: 'Project' },
        { key: 'plotNumber', label: 'Plot #' },
        { key: 'amount', label: 'Amount', render: (r) => `PKR ${Number(r.amount).toLocaleString()}` },
        { key: 'status', label: 'Status', render: (r) => statusBadge(r.status) },
        { key: 'createdAt', label: 'Submitted', render: (r) => formatDate(r.createdAt) },
      ]}
    />
  );
};

export default AdminPayments;
