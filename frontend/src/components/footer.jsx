import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Reveal from './motion/Reveal';
import { StaggerContainer, StaggerItem } from './motion/Stagger';

const socialIconClass =
  'w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-500 text-white transition-colors duration-300';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12" stagger={0.12}>
          {/* Company Info */}
          <StaggerItem className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img alt="Al Kabir Developers Logo" src="/assets/images/logo_main_header.webp" className="h-12 w-auto" />
              <div>
                <h3 className="text-lg font-bold text-white">AL KABIR</h3>
                <p className="text-xs text-emerald-400 font-semibold">Developers</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Developing quality infrastructure and real estate projects since 2016. We specialize in creating sustainable communities with modern amenities.
            </p>
            <div className="flex gap-4 pt-4">
              <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} href="https://facebook.com" target="_blank" rel="noreferrer" className={socialIconClass}>
                <FaFacebookF />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} href="https://instagram.com" target="_blank" rel="noreferrer" className={socialIconClass}>
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} href="https://twitter.com" target="_blank" rel="noreferrer" className={socialIconClass}>
                <FaXTwitter />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} href="https://youtube.com" target="_blank" rel="noreferrer" className={socialIconClass}>
                <FaYoutube />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} href="https://tiktok.com" target="_blank" rel="noreferrer" className={socialIconClass}>
                <FaTiktok />
              </motion.a>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Services</Link></li>
              <li><Link to="/amenities" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Amenities</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Contact Us</Link></li>
              <li><Link to="/legal-approvals" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Legal Approvals</Link></li>
            </ul>
          </StaggerItem>

          {/* Projects */}
          <StaggerItem>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              Our Projects
            </h4>
            <ul className="space-y-3">
              <li><Link to="/alkabirtownphase1" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Al Kabir Town Phase I</Link></li>
              <li><Link to="/alkabirtownphase2" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Al Kabir Town Phase II</Link></li>
              <li><Link to="/kingstownphase1" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Kings Town Phase I</Link></li>
              <li><Link to="/kingstownphase2" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">Kings Town Phase II</Link></li>
              <li><Link to="/thelifeenclave" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 inline-block transition duration-300 font-medium">The Life Enclave</Link></li>
            </ul>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaPhone className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">+92-42-35171111</p>
                  <p className="text-slate-300 text-sm">+92-300-8400000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm">info@alkabirdevelopers.com</p>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm">Main Raiwind Road, Lahore, Pakistan</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Divider */}
        <Reveal className="border-t border-slate-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>&copy; 2024 Al Kabir Developers. All rights reserved.</p>
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-emerald-400 transition duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-emerald-400 transition duration-300">Terms & Conditions</Link>
            </div>
            <div className="text-slate-400 text-sm text-center md:text-right">
              <p>Designed with <span className="text-emerald-400">❤</span> for Excellence</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
