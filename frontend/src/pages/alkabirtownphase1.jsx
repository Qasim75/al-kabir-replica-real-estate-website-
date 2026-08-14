import React from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '../components/motion/Stagger';

const Alkabirtownphase1 = () => {
  useDocumentTitle('Al Kabir Town Phase 1');
    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen font-sans text-slate-900">

            {/* 1. Minimal Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-slate-50 border-b border-slate-100">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs"
                    >
                        Established Excellence
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-black mt-4 text-slate-800 tracking-tight"
                    >
                        Al-Kabir Town Phase-I
                    </motion.h1>
                    <p className="mt-4 text-slate-500 max-w-xl mx-auto">A landmark residential project designed for modern families and smart investments.</p>
                </div>
            </section>

            {/* 2. Overview Section (Humanized Grid) */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal direction="left" className="order-2 lg:order-1">
                        <h2 className="text-3xl font-extrabold  mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-blue-600 rounded-full" /> Overview
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-10 text-lg">
                            Al-Kabir Developers brings innovation, quality, and modern living.
                            Al-Kabir Town Phase-I is designed for families seeking comfort, security, and long-term value in the heart of Lahore.
                        </p>

                        <StaggerContainer className="grid grid-cols-2 gap-4" stagger={0.08}>
                            {[
                                { label: "Location", val: "Raiwind Road", icon: "📍" },
                                { label: "Apartments", val: "214 Total", icon: "🏢" },
                                { label: "Total Area", val: "200 Kanals", icon: "📏" },
                                { label: "Type", val: "Residential", icon: "🏡" },
                            ].map((box, i) => (
                                <StaggerItem key={i} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-colors group">
                                    <span className="text-2xl mb-2 block">{box.icon}</span>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{box.label}</h4>
                                    <p className="text-slate-800 font-bold mt-1 group-hover:text-blue-600 transition-colors">{box.val}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </Reveal>
                    <Reveal direction="right" delay={0.1} className="order-1 lg:order-2 flex justify-center">
                        <motion.div whileHover={{ scale: 1.03, rotate: -1 }} className="relative p-4 bg-white shadow-2xl rounded-[3rem] border border-slate-100">
                            <img alt="Logo" src="/assets/images/ak phase 1/AKT_Logo_phase_1.webp" className="w-64 md:w-80 object-contain" />
                        </motion.div>
                    </Reveal>
                </div>
            </section>

            {/* 3. Lifestyle Section (Alternating) */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal direction="left" className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} alt="Lifestyle" src="/assets/images/ak phase 1/A_Life_style.webp" className="w-full h-full object-cover" />
                    </Reveal>
                    <Reveal direction="right" delay={0.1} className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white leading-tight">A Lifestyle <br /><span className="text-blue-600">Beyond Ordinary</span></h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Experience a modern lifestyle with thoughtfully planned residential and commercial blocks, wide roads, and lush green spaces designed for your peace of mind.
                        </p>
                        <ul className="grid grid-cols-1 gap-3">
                            {["A Block", "Gold Commercial", "A-Block Extension"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </section>

            {/* 4. Amenities (Clean Icon Grid) */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-800">Premium Amenities</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 italic-none">Everything you need for a comfortable life</p>
                </Reveal>
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" stagger={0.05}>
                    {[
                        { n: "Security", i: "🔒" }, { n: "Wide Roads", i: "🛣️" }, { n: "Education", i: "🎓" },
                        { n: "Transport", i: "🚌" }, { n: "Power Backup", i: "⚡" }, { n: "Commercial", i: "🏪" },
                        { n: "Sewerage", i: "🚰" }, { n: "Healthcare", i: "🏥" }, { n: "Mosque", i: "🕌" },
                        { n: "Kids Area", i: "🛝" }, { n: "CCTV", i: "📹" }, { n: "Mall", i: "🛍️" },
                    ].map((item, i) => (
                        <StaggerItem key={i} whileHover={{ y: -6, scale: 1.05 }} className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-shadow">
                            <span className="text-3xl mb-3">{item.i}</span>
                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">{item.n}</span>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* 5. Master Plan (Large View) */}
            <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10 mb-10 overflow-hidden">
                <Reveal className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-10">Master Plan</h2>
                    <div className="bg-white p-2 rounded-2xl shadow-2xl">
                        <img alt="Master Plan" src="/assets/images/ak phase 1/map of phase 1.webp" className="w-full h-auto rounded-lg" />
                    </div>
                </Reveal>
            </section>

            {/* 6. Gallery (Masonry Style) */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <Reveal><h2 className="text-3xl font-black text-slate-800 dark:text-white mb-12 text-center">Project Gallery</h2></Reveal>
                <StaggerContainer className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4" stagger={0.06}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <StaggerItem key={num} className="break-inside-avoid rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
                            <img src={`/assets/images/ak phase 1/gallery${num}.png`} alt={`Gallery ${num}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>
        </div>
    );
};

export default Alkabirtownphase1;