import React from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';

const Alkabirtownphase2 = () => {
  useDocumentTitle('Al Kabir Town Phase 2');
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans text-slate-900">

      {/* 1. Enhanced Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-110"
          style={{ backgroundImage: "url('/assets/images/ak phase 2/Al-Kabir-Town-Logo1-768x429.webp')" }}
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic-none">
              Phase II <span className="text-blue-500">Edition</span>
            </h1>
            <p className="mt-4 text-slate-200 text-lg md:text-xl font-medium tracking-wide">
              Luxury Living with Smart Investment
            </p>
            <div className="mt-8 h-1 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* 2. Overview with Floating Stats */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">The Masterpiece</span>
              <h2 className="text-4xl font-black text-slate-800 mt-2 italic-none">Project Overview</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Al Kabir Town Phase II is a thoughtfully planned residential community
              offering modern infrastructure, a secure environment, and a peaceful lifestyle.
              Designed with future growth in mind, this project delivers unmatched value and comfort.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Location", val: "Main GT Road, Lahore", icon: "📍" },
                { label: "Status", val: "Prime Development", icon: "🏗️" },
                { label: "Property", val: "Resi & Commercial", icon: "🏠" },
                { label: "Security", val: "24/7 Gated", icon: "🔐" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-800 font-bold leading-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              whileHover={{ rotate: -2 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img alt="Overview" src="/assets/images/ak phase 2/Al-Kabir-Town-Logo1-768x429.webp" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Lifestyle Beyond Ordinary (Side-by-Side) */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              alt="Main Entrance"
              src="/assets/images/ak phase 2/a life beyond ordinary.webp"
              className="relative rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black italic-none leading-tight">
              A Lifestyle <br /> <span className="text-blue-500">Beyond Ordinary</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Al Kabir Town Phase II combines modern urban planning with affordability.
              Ideal for families, investors, and future homeowners.
            </p>
            <ul className="space-y-4 mt-8">
              {["Wide carpeted roads", "Commercial zones", "Parks & green belts", "Mosque & community areas"].map((li, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    ✓
                  </span>
                  <span className="font-bold text-slate-200">{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Amenities (Modern Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tight italic-none">Modern Amenities</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "24/7 Security", "Wide Roads", "Commercial Markets", "Mosque",
            "Kids Play Area", "Parks", "CCTV Surveillance", "Sewerage System"
          ].map((amenity, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {i + 1}
              </div>
              <h4 className="font-black text-slate-700 uppercase text-xs tracking-widest leading-relaxed">
                {amenity}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Master Plan with Background Glow */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-12 uppercase italic-none">Master Plan</h2>
          <div className="bg-white p-4 rounded-[2rem] shadow-2xl inline-block border border-slate-100">
            <img alt="Master Plan" src="/assets/images/ak phase 2/phase 2 map.webp" className="rounded-xl max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* 6. Gallery (Instagram Style Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white uppercase italic-none">Gallery</h2>
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">#AlKabirTown</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 0.98 }}
              className="aspect-square rounded-[2rem] overflow-hidden bg-slate-100 shadow-md group"
            >
              <img
                src={`/assets/images/ak phase 2/gallery${num === 6 ? '6' : num}.webp`}
                alt={`Gallery ${num}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Alkabirtownphase2;