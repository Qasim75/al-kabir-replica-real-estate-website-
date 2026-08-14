import axios from 'axios';

// Uses VITE_API_URL from .env when set (e.g. https://api.alkabirdeveloper.com/api),
// and falls back to localhost for local development so nothing breaks out of the box.
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically attaches the admin JWT (if logged in) to every request.
// Public form-submission endpoints ignore the header, so this is safe to
// send on every request rather than only on /admin/* calls.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('ak_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// If a stored token is invalid/expired, clear it so the admin panel
// redirects back to the login screen instead of looping on 401s.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401 && window.location.pathname.startsWith('/admin')) {
      localStorage.removeItem('ak_admin_token');
    }
    return Promise.reject(error);
  }
);

export default api;
