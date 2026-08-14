import React from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '../components/motion/Stagger';

const Kingstownphase1 = () => {
  useDocumentTitle('Kings Town Phase 1');
  const royalStats = [
    { label: "Location", val: "Main Raiwind Road", icon: "📍" },
    { label: "Type", val: "Resi & Commercial", icon: "🏰" },
    { label: "Status", val: "Approved & Delivered", icon: "✅" },
    { label: "Developer", val: "Al Kabir Developers", icon: "👑" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans text-slate-900 overflow-x-hidden">
      {/* 1. ROYAL HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, filter: 'blur(4px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/ak kings 1/A Life Beyond.webp')" }}
        />
        {/* Golden-Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              alt="Kings Town"
              className="w-48 md:w-64 mb-8 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]"
              src="/assets/images/ak kings 1/main logo kings town.webp"
            />
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter">
              KINGS TOWN <br />
              <span className="text-amber-500 italic">PHASE I</span>
            </h1>
            <p className="mt-6 text-slate-300 text-xl md:text-2xl font-light tracking-widest max-w-lg">
              PREMIUM LIVING WITH MODERN ROYAL INFRASTRUCTURE
            </p>
            <div className="mt-10 flex gap-4">
              <div className="h-1 w-20 bg-amber-500 rounded-full" />
              <div className="h-1 w-10 bg-amber-500/50 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MAJESTIC OVERVIEW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <Reveal direction="left" className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-200 rounded-full">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em]">The Crown Jewel of Raiwind</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              A Legacy of <br /><span className="text-amber-600 underline decoration-slate-200 underline-offset-8">Excellence</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Kings Town Phase I is a premium residential project by Al-Kabir Developers, offering an affordable yet luxurious lifestyle with modern town planning standards and world-class infrastructure.
            </p>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
              {royalStats.map((item, i) => (
                <StaggerItem key={i} whileHover={{ y: -4 }} className="flex items-center gap-5 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-shadow group">
                  <div className="text-3xl bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-800 font-bold text-lg">{item.val}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[4rem] rotate-3 scale-95 group-hover:rotate-0 transition-transform duration-700" />
            <img
              alt="Overview"
              src="/assets/images/ak kings 1/main logo kings town.webp"
              className="relative rounded-[3rem] shadow-2xl bg-white p-12 w-full max-w-md mx-auto"
            />
          </Reveal>
        </div>
      </section>

      {/* 3. LIFESTYLE (KING'S VIBE) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="left" className="relative">
            <img
              src="/assets/images/ak kings 1/A Life Beyond.webp"
              className="rounded-[3rem] shadow-[0_0_50px_rgba(245,158,11,0.2)] border-2 border-slate-800"
              alt="King's Entry"
            />
            <div className="absolute -bottom-10 -right-10 hidden md:block w-40 h-40 bg-amber-500 rounded-full blur-[80px] opacity-30" />
          </Reveal>
          <Reveal direction="right" delay={0.1} className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black italic-none leading-tight">
              LIFESTYLE FOR <br /> <span className="text-amber-500 underline underline-offset-4 decoration-1">ROYALS</span>
            </h2>
            <ul className="space-y-5">
              {[
                "Gated community with 24/7 security",
                "Wide carpeted roads",
                "Underground electricity",
                "Educational and healthcare facilities"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="h-2 w-2 bg-amber-500 rounded-full group-hover:w-10 transition-all duration-300" />
                  <span className="text-xl font-medium text-slate-300 group-hover:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. ROYAL AMENITIES (GOLDEN GRID) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-widest">Project Amenities</h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
        </Reveal>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.06}>
          {[
            "24/7 Security", "Underground Electricity", "Wide Roads", "Mosque",
            "Parks", "Commercial Areas", "Sewerage System", "Water Supply"
          ].map((amenity, i) => (
            <StaggerItem key={i} whileHover={{ y: -6 }} className="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2.5rem] text-center hover:bg-slate-900 hover:text-white transition-colors duration-500 shadow-sm group">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 group-hover:text-white">
                👑
              </div>
              <h4 className="font-bold uppercase text-xs tracking-widest leading-relaxed">
                {amenity}
              </h4>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 5. MASTER PLAN (KING'S BLUEPRINT) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <Reveal className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white mb-12 uppercase">Master Plan</h2>
          <div className="bg-white p-6 rounded-[3rem] shadow-2xl inline-block border-t-8 border-amber-500">
            <img alt="Master Plan" src="/assets/images/ak kings 1/MAp.webp" className="rounded-2xl max-w-full h-auto" />
          </div>
        </Reveal>
      </section>

      {/* 6. GALLERY (CINEMATIC KINGS GRID) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-black text-slate-800 dark:text-white mb-16 uppercase text-center md:text-left tracking-tighter italic">
            Project <span className="text-amber-500">Gallery</span>
          </h2>
        </Reveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.07}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <StaggerItem
              key={num}
              className="group aspect-video rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-lg relative"
            >
              <img
                src={`/assets/images/ak kings 1/gallery${num}${num === 1 || num === 7 ? '.webp' : '.jpg'}`}
                alt={`Gallery ${num}`}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold tracking-[0.2em] uppercase text-xs">Kings Town Life</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
};

export default Kingstownphase1;