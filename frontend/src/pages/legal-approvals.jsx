import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useDocumentTitle from '../utils/useDocumentTitle';

const LegalApprovals = () => {
  useDocumentTitle('Legal Approvals');
  const [selectedImg, setSelectedImg] = useState(null);

  const approvals = [
    { title: "LDA Approval N1", img: "/assets/images/lahore development authority N1.jpeg", category: "LDA" },
    { title: "LDA Approval N2", img: "/assets/images/Lahore-Development-Authority N2.jpg", category: "LDA" },
    { title: "LDA Approval N3", img: "/assets/images/Lahore Development authority N3.jpg", category: "LDA" },
    { title: "LDA Approval N4", img: "/assets/images/LDA N4.jpg", category: "LDA" },
    { title: "Commendation Letter", img: "/assets/images/Letter of Commendation.jpg", category: "Certification" },
    { title: "WASA Approval", img: "/assets/images/Water & Sanatery agency.jpg", category: "Utilities" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      {/* 1. Trust Hero Section */}
      <section className="relative py-24 bg-[#001529] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full tracking-[0.3em] uppercase">
              100% Verified
            </span>
          </motion.div>
          <h1 className="mt-6 text-5xl md:text-7xl font-black text-white tracking-tight">
            LEGAL <span className="text-blue-500">APPROVALS</span>
          </h1>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Transparency is our foundation. Explore our official certifications and legal
            authorizations from government regulatory bodies.
          </p>
        </div>
      </section>

      {/* 2. Interactive Document Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {approvals.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImg(item)}
            >
              <div className="relative bg-white p-4 rounded-[2rem] shadow-sm border border-slate-200 group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500">
                {/* Document Preview Area */}
                <div className="relative h-80 w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold text-sm shadow-xl">
                      View Full Certificate
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="mt-6 px-2 pb-2">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-xl font-black text-slate-800 mt-1">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="h-1 w-12 bg-green-500 rounded-full" />
                    <span className="text-xs text-slate-400 font-medium tracking-tighter italic italic-none">Officially Stamped</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Lightbox Modal (The "Shocking" Pop-up) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              className="relative max-w-4xl w-full bg-white p-2 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white text-3xl font-light hover:text-blue-400 transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                ✕ Close
              </button>
              <img
                src={selectedImg.img}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                alt="Selected Certificate"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedImg.title}</h3>
                <p className="text-slate-500 uppercase text-xs tracking-[0.2em] mt-1 italic-none">Government Verified Document</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LegalApprovals;