import { useContext } from 'react';
import AdminAuthContext from './AdminAuthContextObject';

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
};

export default useAdminAuth;
