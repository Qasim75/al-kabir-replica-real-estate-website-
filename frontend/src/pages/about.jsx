import React from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '../components/motion/Stagger';

const About = () => {
  useDocumentTitle('About Us');
  const cards = [
    { title: "Mission", desc: "We believe in delivering quality with full commitment to every home.", icon: "🎯", color: "from-blue-500 to-blue-700" },
    { title: "Vision", desc: "To become Pakistan's most trusted and accessible real estate brand.", icon: "👁️", color: "from-emerald-500 to-teal-700" },
    { title: "Expertise", desc: "A decade of mastering residential & commercial masterpieces.", icon: "🏗️", color: "from-indigo-500 to-purple-700" },
    { title: "Support", desc: "A human-first approach to client care, available around the clock.", icon: "🤝", color: "from-blue-600 to-indigo-800" },
  ];

  return (
    <div className="bg-[#fcfcfc] dark:bg-slate-950 min-h-screen font-sans">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-blue-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Building Legacies</span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">MISSION</span>
          </h1>
        </motion.div>
      </section>

      {/* 2. Overview Section: The "Goal" Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white leading-tight">
              Our Goal Then <br /> & <span className="text-blue-600">Now</span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Al Kabir Developers has gained excellence in a short period of time. 
                What started as a small vision for quality buildings has now emerged 
                into designing entire **sustainable communities**.
              </p>
              <p>
                We don't just use bricks and mortar; we embrace **cutting-edge technologies** to redefine construction management and engineering in Pakistan.
              </p>
            </div>
          </motion.div>

          {/* 3. The Interactive Info Cards (Humanized Grid) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {cards.map((card, index) => (
              <StaggerItem
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group p-8 rounded-[2.5rem] bg-white dark:bg-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-700 overflow-hidden"
              >
                {/* Subtle Gradient Glow on Hover */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl`} />
                
                <div className="text-4xl mb-6">{card.icon}</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{card.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
                
                {/* Decorative Element */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Trust Banner (Unique humanized element) */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              "We believe in continuous development and the power of human connection."
            </h3>
            <div className="flex justify-center gap-4">
               <div className="h-1 w-12 bg-blue-600 rounded-full" />
               <div className="h-1 w-4 bg-blue-400 rounded-full" />
               <div className="h-1 w-1 bg-blue-200 rounded-full" />
            </div>
        </Reveal>
      </section>
    </div>
  );
};

export default About;