import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Safarivilla = () => {
  const projectData = {
    title: "Safari Villas",
    subtitle: "Al-Kabir Orchard",
    heroImage: "/assets/images/ak safferivillas/overview.webp",
    overview: "Safari Villas in Al-Kabir Orchard offers a unique living experience inspired by nature and luxury. These beautifully designed villas provide a secure and serene environment for families, featuring modern architecture and high-end finishes within a gated community.",
    details: [
      { label: "Location", value: "Main GT Road, Lahore" },
      { label: "Project", value: "Al-Kabir Orchard" },
      { label: "Type", value: "Residential Villas" },
      { label: "Status", value: "Premium Living" }
    ],
    amenities: [
      { name: "Luxury Villas", icon: "🏡" },
      { name: "Gated Entry", icon: "🚧" },
      { name: "Landscaped Parks", icon: "🌳" },
      { name: "24/7 Security", icon: "🛡️" },
      { name: "Community Club", icon: "🏢" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Kids Play Area", icon: "🎠" },
      { name: "Underground Power", icon: "🔌" }
    ],
    gallery: [
      "/assets/images/ak safferivillas/landspace park.webp",
      "/assets/images/ak safferivillas/Community-Center.png",
      "/assets/images/ak safferivillas/Gym.png",
      "/assets/images/ak safferivillas/Telecommunication.png"
    ],
    paymentPlan: "/assets/images/ak safferivillas/Payment-Plan.webp",
    accentColor: "green"
  };

  return <ProjectPage {...projectData} />;
};

export default Safarivilla;
