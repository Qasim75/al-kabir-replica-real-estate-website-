import React from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';

const Management = () => {
  useDocumentTitle('Management');
  const boardOfDirectors = [
    {
      name: "Chaudhry Aurangzeb",
      role: "Chairman",
      image: "/assets/images/chairman.webp",
      bio: "Since 2007, he has been a part of the Real Estate business and has played a vital role in establishing Al Kabir Developers."
    },
    {
      name: "Chaudhry Ahmad",
      role: "CEO",
      image: "/assets/images/ahmbad-baig-ceo.webp",
      bio: "With strong leadership and commitment, he has helped the company achieve consistent growth and success."
    }
  ];

  const executiveTeam = [
    { name: "Brig. (R) Junaid Ahsan", role: "Managing Director", image: "/assets/images/zia_ullah_anjum.jpg" },
    { name: "Chaudhry Aftab Ahmad", role: "Executive Director Sales", image: "/assets/images/Aftab-Ahmed-Executice.webp" },
    { name: "Sohaib Ahmad", role: "Director Finance", image: "/assets/images/SOHAIL-AHMAD.webp" }
  ];

  return (
    /* 1. Added relative and z-0 to main container to keep it below Navbar */
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans relative z-0">

      {/* Navbar wrapper to ensure it stays on top */}
      <div className="relative z-[100]">
      </div>

      {/* 2. Sleek Hero Section - Lowered z-index */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#001529] overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            Management
          </h1>
          <p className="text-blue-400 font-bold tracking-[0.3em] mt-4 uppercase text-xs md:text-sm">The Visionaries</p>
        </motion.div>
      </section>

      {/* 3. Board of Directors */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Board of Directors</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {boardOfDirectors.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group flex flex-col md:flex-row bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="md:w-1/2 overflow-hidden h-80 md:h-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                <span className="text-blue-600 font-black uppercase text-[10px] tracking-widest">{member.role}</span>
                <h3 className="text-2xl font-bold text-slate-800 mt-2 mb-3">{member.name}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Executive Management - Fixed Overlap Issues */}
      <section className="py-24 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight">Executive Management</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4 md:ml-0 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group rounded-[1.5rem] overflow-hidden bg-slate-800 border border-slate-700 shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                {/* Fixed Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{member.role}</p>
                  <h4 className="text-lg font-bold tracking-tight">{member.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;