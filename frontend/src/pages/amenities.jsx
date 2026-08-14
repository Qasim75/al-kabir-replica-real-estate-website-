import React from 'react';
import { motion } from 'framer-motion'; // Shocking effects ke liye
import useDocumentTitle from '../utils/useDocumentTitle';

const Amenities = () => {
  useDocumentTitle('Amenities');
  const amenitiesList = [
    { icon: "🔒", title: "24/7 Security", tag: "Secure" },
    { icon: "🛣️", title: "Wide Roads", tag: "Modern" },
    { icon: "🎓", title: "Education", tag: "Future" },
    { icon: "🚌", title: "Transport", tag: "Easy" },
    { icon: "⚡", title: "24/7 Power", tag: "Non-stop" },
    { icon: "🏪", title: "Markets", tag: "Nearby" },
    { icon: "🚰", title: "Sewerage", tag: "Clean" },
    { icon: "🏥", title: "Healthcare", tag: "Care" },
    { icon: "🕌", title: "Grand Mosque", tag: "Spiritual" },
    { icon: "🛝", title: "Kids Area", tag: "Fun" },
    { icon: "🏛️", title: "Community", tag: "Social" },
    { icon: "🔥", title: "Sui Gas", tag: "Essential" },
    { icon: "📹", title: "CCTV", tag: "Safety" },
    { icon: "🏧", title: "ATM", tag: "Quick" },
    { icon: "🛍️", title: "Mall", tag: "Luxury" },
    { icon: "🍔", title: "Food Street", tag: "Tasty" },
  ];

  return (
    <div className="bg-[#fdfdfd] min-h-screen font-sans selection:bg-green-100 selection:text-green-900">
      {/* Modern Hero Section with Soft Blur */}
      <section className="relative py-24 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Premium Lifestyle
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold  text-slate-900 dark:text-white mb-8 tracking-tight"
          >
            Amenities Built For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 italic">Every Generation</span>
          </motion.h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every detail is designed to be more than just a facility. We create spaces where
            security meets comfort and technology meets nature.
          </p>
        </div>
      </section>

      {/* Humanized Grid Section */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {amenitiesList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* Background Subtle Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Floating Tag */}
                  <span className="absolute top-0 right-0 text-[10px] font-black uppercase tracking-tighter text-slate-300 group-hover:text-blue-400 transition-colors">
                    {item.tag}
                  </span>

                  {/* Animated Icon Circle */}
                  <div className="w-20 h-20 mb-6 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl group-hover:bg-white group-hover:shadow-lg transition-all duration-500 group-hover:rotate-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <div className="h-1.5 w-8 bg-slate-100 group-hover:w-16 group-hover:bg-green-400 transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;