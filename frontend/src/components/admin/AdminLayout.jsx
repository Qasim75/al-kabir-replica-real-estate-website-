import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaEnvelope,
  FaMoneyBillWave,
  FaFileAlt,
  FaCertificate,
  FaBell,
  FaPhoneVolume,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaKey,
} from 'react-icons/fa';
import { useAdminAuth } from '../../utils/useAdminAuth';
import ThemeToggle from '../motion/ThemeToggle';

const NAV_ITEMS = [
  { to: '/admin', label: 'Overview', icon: FaTachometerAlt, end: true },
  { to: '/admin/contacts', label: 'Contact Messages', icon: FaEnvelope },
  { to: '/admin/payments', label: 'Payments', icon: FaMoneyBillWave },
  { to: '/admin/adjustment-forms', label: 'Adjustment Forms', icon: FaFileAlt },
  { to: '/admin/verifications', label: 'Verifications', icon: FaCertificate },
  { to: '/admin/newsletter', label: 'Newsletter', icon: FaBell },
  { to: '/admin/callbacks', label: 'Callback Requests', icon: FaPhoneVolume },
  { to: '/admin/settings', label: 'Account Settings', icon: FaKey },
];

const AdminLayout = ({ children }) => {
  const { admin, logout } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (item) =>
    item.end ? location.pathname === item.to : location.pathname.startsWith(item.to);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex transition-colors duration-300">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-40 top-0 left-0 h-full w-72 bg-slate-900 text-white flex flex-col transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Al Kabir</p>
            <p className="text-lg font-black">Admin Panel</p>
          </div>
          <button className="lg:hidden text-white/70" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition duration-200 ${
                  active
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="text-base" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-slate-400 font-semibold">Theme</span>
            <ThemeToggle />
          </div>
          <p className="px-2 text-xs text-slate-400">
            Logged in as <span className="text-white font-semibold">{admin?.username}</span>
          </p>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-red-300 hover:bg-red-500/10 hover:text-red-200 transition duration-200"
          >
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden flex items-center justify-between bg-slate-900 text-white px-4 py-3">
          <button onClick={() => setSidebarOpen(true)}>
            <FaBars />
          </button>
          <p className="font-bold">Admin Panel</p>
          <div className="w-5" />
        </header>
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
