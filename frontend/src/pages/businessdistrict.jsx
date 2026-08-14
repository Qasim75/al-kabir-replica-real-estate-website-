import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Businessdistrict = () => {
  const projectData = {
    title: "Business District",
    subtitle: "Al-Kabir Orchard",
    heroImage: "/assets/images/ak business/business district.webp",
    overview: "The Business District within Al-Kabir Orchard is designed to be the commercial engine of the community. It offers prime commercial plots and state-of-the-art infrastructure to support businesses, retail outlets, and corporate offices in a rapidly growing area of Lahore.",
    details: [
      { label: "Location", value: "Main GT Road, Lahore" },
      { label: "Project", value: "Al-Kabir Orchard" },
      { label: "Type", value: "Commercial Hub" },
      { label: "Status", value: "Developing" }
    ],
    amenities: [
      { name: "Commercial Plots", icon: "🏢" },
      { name: "Wide Roads", icon: "🛣️" },
      { name: "24/7 Power", icon: "⚡" },
      { name: "Parking Lots", icon: "🅿️" },
      { name: "Security", icon: "🛡️" },
      { name: "Sui Gas", icon: "🔥" },
      { name: "Modern Sewerage", icon: "🚰" },
      { name: "IT Ready", icon: "💻" }
    ],
    gallery: [
      "/assets/images/ak business/Community-Center.png",
      "/assets/images/ak business/Media-House.png",
      "/assets/images/ak business/Gym.png",
      "/assets/images/ak business/Telecommunication.png"
    ],
    paymentPlan: "/assets/images/ak business/payment plan.webp",
    accentColor: "blue"
  };

  return <ProjectPage {...projectData} />;
};

export default Businessdistrict;
