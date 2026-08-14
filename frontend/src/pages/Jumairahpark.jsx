import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Jumairahpark = () => {
  const projectData = {
    title: "Jumairah Park",
    subtitle: "Luxury & Sustainability",
    heroImage: "/assets/images/ak jumairah/elevation-transformed.webp",
    overview: "Experience a lifestyle where sustainability, serenity, and sophistication come together in perfect harmony. Jumairah Park Villas invites you into a community crafted with intention where every pathway, every green corner, and every design element reflects a deep respect for nature. Modern comfort comes together with peaceful living, providing a home that encourages a healthy lifestyle.",
    details: [
      { label: "Location", value: "Main Raiwind Road, Lahore" },
      { label: "Plot Size", value: "5 Marla" },
      { label: "Type", value: "Residential Villas" },
      { label: "Status", value: "Premium Development" }
    ],
    amenities: [
      { name: "24/7 Power", icon: "⚡" },
      { name: "Eco Friendly", icon: "🌱" },
      { name: "E-Sport Arena", icon: "🎮" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Kids Play Area", icon: "🎠" },
      { name: "Open Theater", icon: "🎭" },
      { name: "Gym & Fitness", icon: "💪" },
      { name: "Security", icon: "🛡️" }
    ],
    gallery: [
      "/assets/images/ak jumairah/Jumairah-community-center2.webp",
      "/assets/images/ak jumairah/Jumairah-esports.webp",
      "/assets/images/ak jumairah/Jumairah-grand-mosque.webp",
      "/assets/images/ak jumairah/Jumairah-kids-playing-ground.webp",
      "/assets/images/ak jumairah/open-networking-zone-jumairah.webp",
      "/assets/images/ak jumairah/open-theatre-jumairah.webp"
    ],
    masterPlan: "/assets/images/ak jumairah/map.webp",
    paymentPlan: "/assets/images/ak jumairah/Jumairah-Park-Villas-Payment-Plan-Front.webp",
    accentColor: "green"
  };

  return <ProjectPage {...projectData} />;
};

export default Jumairahpark;
