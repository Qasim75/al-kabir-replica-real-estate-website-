import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Alkareemcity = () => {
  const projectData = {
    title: "Al-Kareem City",
    subtitle: "Modern Urban Living",
    heroImage: "/assets/images/ak kareem/Picture1.webp",
    overview: "Al-Kareem City is a premier real estate development designed to integrate shopping malls, retail, hospitality, and leisure into a cohesive urban environment. With a focus on high-quality infrastructure and modern lifestyle facilities, it stands as a testament to Al-Kabir Developers' commitment to excellence.",
    details: [
      { label: "Location", value: "Lahore" },
      { label: "Type", value: "Mixed-Use Development" },
      { label: "Status", value: "Premium Project" },
      { label: "Developer", value: "Al-Kabir Developers" }
    ],
    amenities: [
      { name: "Shopping Mall", icon: "🛍️" },
      { name: "Retail Hub", icon: "🏪" },
      { name: "Hospitality", icon: "🏨" },
      { name: "Leisure Zone", icon: "🎡" },
      { name: "24/7 Security", icon: "🛡️" },
      { name: "Modern Sewerage", icon: "🚰" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Parks", icon: "🌳" }
    ],
    gallery: [
      "/assets/images/ak kareem/Picture1.webp"
    ],
    accentColor: "gold"
  };

  return <ProjectPage {...projectData} />;
};

export default Alkareemcity;
