import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '../components/motion/Stagger';

const ProjectPage = ({
  title,
  subtitle,
  heroImage,
  overview,
  details,
  amenities,
  gallery,
  masterPlan,
  paymentPlan,
  accentColor = "blue"
}) => {
  useDocumentTitle(title);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.15]);

  const colorClasses = {
    blue: "text-blue-600 bg-blue-600 border-blue-600 shadow-blue-200",
    green: "text-green-600 bg-green-600 border-green-600 shadow-green-200",
    gold: "text-amber-600 bg-amber-600 border-amber-600 shadow-amber-200",
    red: "text-red-600 bg-red-600 border-red-600 shadow-red-200"
  };

  const activeColor = colorClasses[accentColor] || colorClasses.blue;
  const textColor = activeColor.split(' ')[0];
  const bgColor = activeColor.split(' ')[1];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section (parallax background) */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div
          style={{ backgroundImage: `url('${heroImage}')`, y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-cover bg-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-slate-900/40" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '-0.02em', opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl font-black text-white uppercase leading-none drop-shadow-2xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`mt-6 ${textColor} text-lg md:text-2xl font-black tracking-[0.3em] uppercase bg-white/95 px-8 py-2 inline-block rounded-full shadow-2xl`}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm font-semibold tracking-widest flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          SCROLL
          <span className="w-px h-8 bg-white/50" />
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Reveal direction="left">
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white leading-tight">
                Project <span className={textColor}>Overview</span>
              </h2>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed">
                {overview}
              </p>
            </Reveal>
            <StaggerContainer className="grid grid-cols-2 gap-6" stagger={0.08}>
              {details.map((detail, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 30px -12px rgba(0,0,0,0.15)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-4 shadow-sm h-full"
                    style={{ borderColor: textColor.replace('text-', '') }}
                  >
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">{detail.label}</p>
                    <p className="font-black text-slate-800">{detail.value}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <Reveal direction="right" className="relative group">
             <div className={`absolute -inset-4 ${bgColor.replace('bg-', 'bg-opacity-10 bg-')} rounded-[4rem] rotate-2 scale-95 opacity-50`} />
             <motion.img
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.4 }}
               alt={title}
               src={heroImage}
               className="relative w-full h-[400px] object-cover rounded-[3.5rem] shadow-2xl border border-slate-100"
             />
          </Reveal>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-slate-900 rounded-[4rem] mx-4 md:mx-10 overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-16 uppercase">Premium <span className={textColor}>Amenities</span></h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8" stagger={0.06}>
            {amenities.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white hover:text-slate-900 transition-colors duration-500 group h-full"
                >
                  <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h4 className="text-lg font-black uppercase tracking-widest">{item.name}</h4>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Master Plan Section */}
      {masterPlan && (
        <section className="py-24 max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4 uppercase">Master Plan</h2>
            <div className={`h-1.5 w-20 ${bgColor} mx-auto mb-12 rounded-full`} />
          </Reveal>
          <Reveal delay={0.15} className="p-4 bg-white rounded-[3rem] shadow-2xl border border-slate-100 inline-block group overflow-hidden">
            <img alt="Master Plan" src={masterPlan} className="rounded-[2.5rem] w-full h-auto group-hover:scale-105 transition-transform duration-1000" />
          </Reveal>
        </section>
      )}

      {/* Payment Plan Section */}
      {paymentPlan && (
        <section className="py-24 max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white uppercase">Payment Plan</h2>
            <div className={`h-1.5 w-20 ${bgColor} mx-auto mt-4 rounded-full`} />
          </Reveal>
          <Reveal delay={0.15} className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl">
            <img alt="Payment Plan" src={paymentPlan} className="w-full h-auto" />
          </Reveal>
        </section>
      )}

      {/* Gallery Section */}
      {gallery && gallery.length > 0 && (
        <section className="py-24 max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl font-black text-slate-800 dark:text-white uppercase mb-12">Project Gallery</h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
            {gallery.map((img, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[2.5rem] overflow-hidden shadow-xl h-80 group"
                >
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6">
        <Reveal className="max-w-5xl mx-auto text-center">
          <div className={`${bgColor} rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden`}>
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"
              animate={{ scale: [1.15, 1, 1.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase relative z-10">Ready to Invest?</h2>
            <p className="text-white/80 font-medium mb-12 max-w-lg mx-auto text-lg relative z-10">
              Secure your future with Al-Kabir Developers. Contact our experts today for booking and details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                 <Link
                   to="/contact"
                   className="block bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors shadow-xl"
                 >
                   Contact Sales
                 </Link>
               </motion.div>
               <motion.a
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.96 }}
                 href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Al Kabir Developers, Main Raiwind Road, Lahore')}`}
                 target="_blank"
                 rel="noreferrer"
                 className="bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors shadow-xl"
               >
                 Location Map
               </motion.a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default ProjectPage;
