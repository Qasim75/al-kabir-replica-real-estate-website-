import React from 'react';
import AdminListPage from '../../components/admin/AdminListPage';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { formatDate } from '../../utils/format';

const AdminNewsletter = () => {
  useDocumentTitle('Newsletter Subscribers');
  return (
    <AdminListPage
      title="Newsletter Subscribers"
      subtitle="People who registered for news and updates."
      endpoint="/newsletter"
      emptyLabel="No subscribers yet"
      columns={[
        { key: 'name', label: 'Name', render: (r) => r.name || '—' },
        { key: 'email', label: 'Email' },
        { key: 'createdAt', label: 'Subscribed', render: (r) => formatDate(r.createdAt) },
      ]}
    />
  );
};

export default AdminNewsletter;
