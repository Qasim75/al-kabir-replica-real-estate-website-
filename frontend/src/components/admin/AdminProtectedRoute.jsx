import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../../utils/useAdminAuth';

const AdminProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAdminAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;
