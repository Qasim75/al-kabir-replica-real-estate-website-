import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Alkabirorchad = () => {
  const projectData = {
    title: "Al-Kabir Orchard",
    subtitle: "Nature Inspired Living",
    heroImage: "/assets/images/ak orchad/overview.jpg",
    overview: "Al-Kabir Orchard is an under-construction residential project situated on Main GT Road, Lahore, spanning 9 acres of lush, well-planned land. Designed to offer a peaceful and family-friendly environment, the project focuses on providing wide open green spaces where children can play and grow.",
    details: [
      { label: "Location", value: "Main GT Road, Lahore" },
      { label: "Area", value: "9 Acres" },
      { label: "Starting Price", value: "PKR 890,000" },
      { label: "Type", value: "Residential & Commercial" }
    ],
    amenities: [
      { name: "24/7 Power", icon: "⚡" },
      { name: "Green Spaces", icon: "🌿" },
      { name: "Theme Park", icon: "🎡" },
      { name: "Security", icon: "🛡️" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Kids Play Area", icon: "🎠" },
      { name: "Sui Gas", icon: "🔥" },
      { name: "Education", icon: "📚" }
    ],
    gallery: [
      "/assets/images/ak orchad/overview.jpg",
      "/assets/images/ak orchad/masterplan.webp"
    ],
    masterPlan: "/assets/images/ak orchad/masterplan.webp",
    accentColor: "green"
  };

  return <ProjectPage {...projectData} />;
};

export default Alkabirorchad;
