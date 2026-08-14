import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import useDocumentTitle from '../utils/useDocumentTitle';
import Reveal from '../components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '../components/motion/Stagger';
import AnimatedCounter from '../components/motion/AnimatedCounter';

const Alkabir = () => {
  useDocumentTitle(null);

  const projects = [
    {
      id: 1,
      name: "Al Kabir Town Phase I",
      location: "Main Raiwind Road, Lahore",
      image: "/assets/images/ak phase 1/project_phase_1_bg.webp",
      link: "/alkabirtownphase1",
      badge: "Featured"
    },
    {
      id: 2,
      name: "Al Kabir Town Phase II",
      location: "Main Raiwind Road, Lahore",
      image: "/assets/images/ak phase 1/project_phase_2_bg.webp",
      link: "/alkabirtownphase2",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Kings Town Phase I",
      location: "Main Raiwind Road, Lahore",
      image: "/assets/images/ak phase 1/project_kings_town_2.webp",
      link: "/kingstownphase1",
      badge: "New"
    },
    {
      id: 4,
      name: "Kings Town Phase II",
      location: "Main Raiwind Road, Lahore",
      image: "/assets/images/ak phase 1/kings_town phase 2.jpg",
      link: "/kingstownphase2",
      badge: "Premium"
    },
    {
      id: 5,
      name: "Al Kabir Downtown",
      location: "Main Raiwind Road, Lahore",
      image: "/assets/images/ak phase 1/project_downtown_phase_2.jpg",
      link: "/alkabirdowntown",
      badge: "Luxury"
    },
    {
      id: 6,
      name: "Al Kabir Orchard",
      location: "Main GT Road, Lahore",
      image: "/assets/images/ak phase 1/project_orchard.webp",
      link: "/alkabirorchad",
      badge: "Green"
    },
    {
      id: 7,
      name: "Jumairah Park Villas",
      location: "Main Raiwind Road",
      image: "/assets/images/ak phase 1/project_jumaira_park_villas.jpg",
      link: "/Jumairahpark",
      badge: "Villas"
    },
    {
      id: 8,
      name: "The Oasis Residence",
      location: "Main Raiwind Road",
      image: "/assets/images/ak phase 1/project_oasis_residence.webp",
      link: "/theoasisbyalkabir",
      badge: "Modern"
    },
    {
      id: 9,
      name: "Maryam Town",
      location: "Main Raiwind Road",
      image: "/assets/images/ak phase 1/project_maryam_town.webp",
      link: "/maryamtown",
      badge: "Community"
    },
    {
      id: 10,
      name: "Safari Villas",
      location: "Main Raiwind Road",
      image: "/assets/images/ak phase 1/saferi villlas.jpg",
      link: "/safarivilla",
      badge: "Exclusive"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            alt="The Life Enclave - Premium Living"
            className="w-full h-full object-cover"
            src="/assets/images/The Life enclave simple image.webp"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent opacity-60"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              THE LIFE ENCLAVE
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-3xl text-gray-200 font-light"
            >
              Your Home, Your Life
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 justify-center pt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-300 hover:shadow-lg"
              >
                Learn More <FaArrowRight />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="/kingstownphase2"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-colors duration-300"
              >
                Kings Town Phase 2
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs font-semibold tracking-widest flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          SCROLL
          <span className="w-px h-8 bg-white/50" />
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-slate-600">
              We develop quality infrastructure and real estate projects since 2016
            </p>
          </Reveal>

          {/* Stats Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" stagger={0.15}>
            <StaggerItem
              whileHover={{ y: -6, boxShadow: '0 20px 30px -12px rgba(16,185,129,0.25)' }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-900/10 p-8 rounded-lg text-center"
            >
              <div className="text-5xl font-bold text-emerald-600 mb-3">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-lg text-slate-700 font-semibold">Completed Projects</div>
            </StaggerItem>
            <StaggerItem
              whileHover={{ y: -6, boxShadow: '0 20px 30px -12px rgba(37,99,235,0.25)' }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10 p-8 rounded-lg text-center"
            >
              <div className="text-5xl font-bold text-blue-600 mb-3">
                <AnimatedCounter value={25} suffix="+" />
              </div>
              <div className="text-lg text-slate-700 font-semibold">Ongoing Projects</div>
            </StaggerItem>
          </StaggerContainer>

          {/* Mission Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 p-12 rounded-xl">
            <Reveal direction="left" className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                To refine and redefine the concept of community lifestyle, offering
                affordable plots with quality features. Our mission is to blend quality
                with economy, providing clients with the best value for their money as
                they enjoy the ultimate living experience at affordable rates. We
                specialize in 3 and 5 Marla plots.
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed mb-8">
                To be one of the world's most valuable, most innovative and most admired
                company for having constantly worked towards fulfilling people's dreams
                and shaping new lifestyles.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition duration-300 group"
              >
                More About Us <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </Link>
            </Reveal>
            <Reveal direction="right" className="order-1 lg:order-2">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                alt="Our Mission and Vision"
                src="/assets/images/Mission-Vision.webp"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                Where Happiness Lives
              </h2>
              <p className="text-slate-600">Explore our premium real estate projects</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-300"
            >
              View All Projects <FaArrowRight />
            </motion.a>
          </Reveal>

          {/* Projects Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.06}>
            {projects.map((project) => (
              <StaggerItem
                key={project.id}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <Link
                  to={project.link}
                  className="group block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img
                      alt={project.name}
                      src={project.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.badge}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>

                  {/* Info */}
                  <div className="p-6 bg-white group-hover:bg-slate-50 transition duration-300">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition duration-300">
                      {project.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      {project.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      <FaArrowRight className="text-emerald-500 group-hover:translate-x-2 transition duration-300" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact our team today and let us help you find the perfect property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors duration-300"
              >
                Get In Touch <FaArrowRight />
              </Link>
            </motion.div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+92-42-35171111"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors duration-300"
            >
              Call Us Now
            </motion.a>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Alkabir;
