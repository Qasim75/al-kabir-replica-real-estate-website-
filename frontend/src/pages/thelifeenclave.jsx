import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Thelifeenclave = () => {
  const projectData = {
    title: "The Life Enclave",
    subtitle: "Al-Kabir Orchard",
    heroImage: "/assets/images/ak life enclave/welcome.webp",
    overview: "The Life Enclave is a vibrant residential community within Al-Kabir Orchard, offering affordable yet high-quality living. It is designed to provide all essential modern amenities, ensuring a comfortable and secure environment for families to thrive.",
    details: [
      { label: "Location", value: "Main GT Road, Lahore" },
      { label: "Project", value: "Al-Kabir Orchard" },
      { label: "Type", value: "Residential Community" },
      { label: "Status", value: "Affordable Luxury" }
    ],
    amenities: [
      { name: "24/7 Power", icon: "⚡" },
      { name: "Parks & Greenery", icon: "🌳" },
      { name: "Security", icon: "🛡️" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Education", icon: "🎓" },
      { name: "Kids Play Area", icon: "🎠" },
      { name: "Sui Gas", icon: "🔥" },
      { name: "Modern Sewerage", icon: "🚰" }
    ],
    gallery: [
      "/assets/images/ak life enclave/facility2.webp",
      "/assets/images/ak life enclave/EV-charging-pods.webp",
      "/assets/images/ak life enclave/Padel-court.webp",
      "/assets/images/ak life enclave/Gym.png"
    ],
    paymentPlan: "/assets/images/ak life enclave/Payment-Plan.webp",
    accentColor: "blue"
  };

  return <ProjectPage {...projectData} />;
};

export default Thelifeenclave;
