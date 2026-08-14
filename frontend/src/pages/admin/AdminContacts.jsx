import React from 'react';
import AdminListPage from '../../components/admin/AdminListPage';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { formatDate } from '../../utils/format';

const AdminContacts = () => {
  useDocumentTitle('Contact Messages');
  return (
    <AdminListPage
      title="Contact Messages"
      subtitle="Messages submitted through the Contact Us form."
      endpoint="/contact"
      emptyLabel="No contact messages yet"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'message', label: 'Message', render: (r) => <span className="line-clamp-2 max-w-md block">{r.message}</span> },
        { key: 'createdAt', label: 'Submitted', render: (r) => formatDate(r.createdAt) },
      ]}
    />
  );
};

export default AdminContacts;
