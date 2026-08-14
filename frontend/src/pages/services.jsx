import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';

const Services = () => {
  useDocumentTitle('Services');
  const [activeTab, setActiveTab] = useState(0);

  // Aapka mukammal data yahan hai
  const servicesData = [
    {
      id: 'service1',
      title: 'Operation & Maintenance',
      image: '/assets/images/Operation-Maintenance-Services.jpeg',
      description: 'Operation and Maintenance services ensure smooth functioning of utilities including water supply, sanitation, electricity, and horticulture.',
      points: ['Efficient town management', 'Preventive maintenance', 'Long-term sustainability']
    },
    {
      id: 'service2',
      title: 'Water Supply',
      image: '/assets/images/2.-Water-Supply-Service.jpg.webp',
      description: 'Reliable and uninterrupted water supply system designed to meet daily household and commercial needs.'
    },
    {
      id: 'service3',
      title: 'Garbage Disposal',
      image: '/assets/images/3.-Garbage-Disposal-Service.jpg.webp',
      description: 'Organized waste collection and disposal system to maintain cleanliness and hygiene.'
    },
    {
      id: 'service4',
      title: '24/7 Electricity',
      image: '/assets/images/4.-Electricity-In-Case-Of-Power-Outage.jpg.webp',
      description: 'Continuous electricity supply with underground wiring ensuring safety and reliability.'
    },
    {
      id: 'service5',
      title: 'Sewerage & Wastewater',
      image: '/assets/images/6.-Sewage-Wastewater-Disposal-Service.jpg.webp',
      description: 'Modern sewerage system designed for efficient wastewater disposal and environmental protection.'
    },
    {
      id: 'service6',
      title: 'Rainwater Disposal',
      image: '/assets/images/7.-Rainwater-Disposal-Service.jpg',
      description: 'Proper rainwater drainage system to prevent water accumulation and flooding.'
    },
    {
      id: 'service7',
      title: 'Mass Fumigation',
      image: '/assets/images/8.-Mass-Fumigation-To-Kill-Insects.jpg.webp',
      description: 'Regular fumigation services to control insects and ensure a healthy living environment.'
    }
  ];

  const current = servicesData[activeTab];

  return (
    <div className="bg-[#0f172a] min-h-screen text-white font-sans">
      
      {/* Cinematic Hero Section */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal>
          <h1 className="relative z-10 text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-blue-400 to-green-400 bg-clip-text text-transparent uppercase">
            World Class Services
          </h1>
          <p className="relative z-10 mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
            Al-Kabir Developers is committed to delivering high-quality services that enhance everyday living.
          </p>
        </Reveal>
      </section>

      {/* Interactive Tabs Layout */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Glassmorphism Sidebar */}
        <Reveal direction="left" className="lg:col-span-4 space-y-3">
          <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-6 px-2">Service Menu</h3>
          {servicesData.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveTab(index)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left p-4 rounded-xl transition-colors duration-300 group flex items-center justify-between ${
                activeTab === index 
                ? 'bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.3)]' 
                : 'bg-white/5 hover:bg-white/10 border border-white/5'
              }`}
            >
              <span className={`font-semibold ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                {service.title}
              </span>
              <motion.span
                animate={{ rotate: activeTab === index ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </motion.span>
            </motion.button>
          ))}
        </Reveal>

        {/* Right: Dynamic Content Display */}
        <Reveal direction="right" delay={0.1} className="lg:col-span-8">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-4 md:p-8 backdrop-blur-md shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image Box with Neon Border */}
                <div className="relative group overflow-hidden rounded-[1.5rem] mb-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60" />
                  <img
                    src={current.image}
                    className="w-full h-[400px] object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    alt={current.title}
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Verified Service</span>
                  </div>
                </div>

                {/* Content info */}
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-white">
                    {current.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {current.points && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {current.points.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.08 }}
                          className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm text-gray-200">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Services;
