import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';

const History = () => {
  useDocumentTitle('Our History');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const timelineData = [
    { year: "2016", date: "Dec", title: "Al Kabir Town Phase I", desc: "Launched amid great fanfare. Resounding success due to design, quality and affordability.", color: "blue" },
    { year: "2017", date: "Mar", title: "Phase I Apartments", desc: "Space utilization, ventilation, security and services at affordable rates.", color: "green" },
    { year: "2017", date: "May", title: "Phase II Block A-D", desc: "Expansion based on customer trust with improved planning.", color: "blue" },
    { year: "2017", date: "July", title: "Block E", desc: "Spacious living, wide roads and underground utilities.", color: "green" },
    { year: "2017", date: "Aug", title: "Ali Block", desc: "Delivered before deadline, combining greenery with modern infrastructure.", color: "blue" },
    { year: "2017", date: "Dec", title: "Usman Block", desc: "Prime accessibility near main entrance for comfort.", color: "green" },
    { year: "2018", date: "Feb", title: "Platinum Homes", desc: "Peaceful and serene living at prime outskirts of Lahore.", color: "blue" },
    { year: "2019", date: "Aug", title: "Phase II Apartments", desc: "Prime location on Main Raiwind Road for families.", color: "green" },
    { year: "2020", title: "Kings Town", desc: "Luxurious lifestyle project launched during Covid-19.", color: "blue" },
    { year: "2021", title: "Gold Commercial", desc: "Commercial plots serving residents and students.", color: "green" },
    { year: "2021", title: "Golf Enclave", desc: "First-ever golf community with residential zones.", color: "blue" },
    { year: "2021", title: "Maryam Town", desc: "Modern and elegant living community on Main Raiwind Road.", color: "green" },
    { year: "2022", title: "Overseas Block A", desc: "Premium living block for overseas Pakistanis.", color: "blue" },
    { year: "2023", title: "Awais Qarni", desc: "Flexible installment plots near Adda Plot Interchange.", color: "green" },
    { year: "2024", title: "The Oasis Block", desc: "Residential plots with theme park and mosque.", color: "blue" },
    { year: "2024", title: "Jumairah Villas", desc: "Premium villa community with world-class infrastructure.", color: "green" },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-center text-white relative">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase relative z-10">Our Journey</h1>
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl" />
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">

          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 w-1 h-full bg-slate-100 -translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-blue-600 to-green-500 origin-top -translate-x-1/2 z-10"
          />

          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Year Circle with Content */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-[3px] border-blue-600 z-30 shadow-xl flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black leading-none text-blue-600">{item.date || ""}</span>
                  <span className="text-[12px] font-black text-slate-800">{item.year}</span>
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[42%] ml-auto md:ml-0">
                  <div className={`p-8 rounded-[2.5rem] bg-white shadow-md hover:shadow-2xl transition-all duration-500 border-t-8 ${item.color === 'blue' ? 'border-blue-600' : 'border-green-500'}`}>
                    <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;