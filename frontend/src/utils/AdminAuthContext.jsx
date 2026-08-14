import React, { useState, useCallback } from 'react';
import api from './api';
import AdminAuthContext from './AdminAuthContextObject';

const TOKEN_KEY = 'ak_admin_token';
const ADMIN_KEY = 'ak_admin_user';

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem(ADMIN_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const isLoggedIn = Boolean(localStorage.getItem(TOKEN_KEY)) && Boolean(admin);

  const login = useCallback(async (username, password) => {
    const response = await api.post('/admin/login', { username, password });
    const { token, admin: adminData } = response.data;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ADMIN_KEY, JSON.stringify(adminData));
    setAdmin(adminData);
    return adminData;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ADMIN_KEY);
    setAdmin(null);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ admin, isLoggedIn, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
