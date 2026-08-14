import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './motion/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* TOP BAR: Social Icons and Quick Links (hidden on mobile to avoid overflow; links move into the mobile menu) */}
      <div className="hidden md:block bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-6">
              <Link to="/register" className="hover:text-emerald-400 transition duration-300 font-medium">
                Register For News
              </Link>
              <Link to="/privacy-policy" className="hover:text-emerald-400 transition duration-300 font-medium">
                Privacy Policy
              </Link>
              <Link to="/callback" className="hover:text-emerald-400 transition duration-300 font-medium">
                Callback Request
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-yellow-400 hover:text-slate-900 transition duration-300 transform hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-yellow-400 hover:text-slate-900 transition duration-300 transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-yellow-400 hover:text-slate-900 transition duration-300 transform hover:scale-110">
                <FaXTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-yellow-400 hover:text-slate-900 transition duration-300 transform hover:scale-110">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-yellow-400 hover:text-slate-900 transition duration-300 transform hover:scale-110">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR: Logo and Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <motion.img
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                alt="Al Kabir Developers"
                src="/assets/images/logo_main_header.webp"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex gap-1 items-center">
              {/* About Us Dropdown */}
              <li 
                className="relative group"
                onMouseEnter={() => handleDropdownHover('about')}
                onMouseLeave={handleDropdownLeave}
              >
                <span className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition duration-300 cursor-pointer flex items-center gap-1">
                  About Us <span className={`text-xs transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`}>▾</span>
                </span>
                <ul className="absolute left-0 mt-0 w-56 bg-white text-slate-900 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-50">
                  <li><Link to="/about" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Overview</Link></li>
                  <li><Link to="/management" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Management</Link></li>
                  <li><Link to="/history" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">History</Link></li>
                  <li><Link to="/legal-approvals" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Legal Approvals</Link></li>
                </ul>
              </li>

              <li><Link to="/services" className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link to="/amenities" className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Amenities</Link></li>

              {/* Our Projects Dropdown */}
              <li 
                className="relative group"
                onMouseEnter={() => handleDropdownHover('projects')}
                onMouseLeave={handleDropdownLeave}
              >
                <span className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition duration-300 cursor-pointer flex items-center gap-1">
                  Our Projects <span className={`text-xs transition-transform ${activeDropdown === 'projects' ? 'rotate-180' : ''}`}>▾</span>
                </span>
                <ul className="absolute left-0 mt-0 w-56 bg-white text-slate-900 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-50 max-h-96 overflow-y-auto">
                  <li><Link to="/alkabirtownphase1" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Al Kabir Town Phase I</Link></li>
                  <li><Link to="/alkabirtownphase2" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Al Kabir Town Phase II</Link></li>
                  <li><Link to="/alkabirdowntown" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Al Kabir Downtown</Link></li>
                  <li><Link to="/kingstownphase1" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Kings Town Phase I</Link></li>
                  <li><Link to="/Jumairahpark" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Jumairah Park</Link></li>
                  <li><Link to="/kingstownphase2" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Kings Town Phase II</Link></li>
                  <li><Link to="/maryamtown" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Maryam Town</Link></li>
                  <li><Link to="/alkabirorchad" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Al Kabir Orchad</Link></li>
                  <li><Link to="/theoasisbyalkabir" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">The Oasis</Link></li>
                  <li><Link to="/businessdistrict" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Business District</Link></li>
                  <li><Link to="/safarivilla" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Safari villas</Link></li>
                  <li><Link to="/thelifeenclave" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">The life Enclave</Link></li>
                  <li><Link to="/alkareemcity" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Al Kareem City</Link></li>
                </ul>
              </li>

              {/* Payments & Verifications Dropdown */}
              <li 
                className="relative group"
                onMouseEnter={() => handleDropdownHover('payments')}
                onMouseLeave={handleDropdownLeave}
              >
                <span className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition duration-300 cursor-pointer flex items-center gap-1">
                  Payments <span className={`text-xs transition-transform ${activeDropdown === 'payments' ? 'rotate-180' : ''}`}>▾</span>
                </span>
                <ul className="absolute left-0 mt-0 w-56 bg-white text-slate-900 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-50">
                  <li><Link to="/adjustment-forms" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Adjustment Forms Verification</Link></li>
                  <li><Link to="/pay-online" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Pay Online</Link></li>
                  <li><Link to="/payment-guide" onClick={() => setIsOpen(false)} className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-600 font-medium transition duration-200">Payment Guide</Link></li>
                </ul>
              </li>

              <li><Link to="/contact" className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
              <li><ThemeToggle /></li>
            </ul>

            {/* Mobile: theme toggle + hamburger */}
            <div className="lg:hidden flex items-center gap-4">
              <ThemeToggle />
              <motion.button
                onClick={toggleMenu}
                whileTap={{ scale: 0.85 }}
                className="text-white text-3xl hover:text-emerald-400 transition duration-300 focus:outline-none"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {isOpen ? <HiX /> : <HiMenu />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden bg-slate-800 rounded-lg mb-4 shadow-lg overflow-hidden"
              >
                <ul className="flex flex-col py-4">
                  <li className="border-b border-slate-700">
                    <Link to="/about" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
                  </li>
                  <li className="border-b border-slate-700">
                    <Link to="/services" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
                  </li>
                  <li className="border-b border-slate-700">
                    <Link to="/amenities" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>Amenities</Link>
                  </li>
                  <li className="border-b border-slate-700">
                    <Link to="/alkabirtownphase1" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>Our Projects</Link>
                  </li>
                  <li className="border-b border-slate-700">
                    <Link to="/adjustment-forms" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>Payments</Link>
                  </li>
                  <li className="border-b border-slate-700">
                    <Link to="/contact" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
                  </li>
                  <li className="border-b border-slate-700">
                    <Link to="/register" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>Register For News</Link>
                  </li>
                  <li>
                    <Link to="/callback" className="block px-6 py-3 text-white hover:bg-emerald-500 hover:text-white transition duration-300 font-medium" onClick={() => setIsOpen(false)}>Callback Request</Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
