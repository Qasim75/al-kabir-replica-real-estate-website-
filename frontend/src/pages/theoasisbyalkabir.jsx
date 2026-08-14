import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Theoasisbyalkabir = () => {
  const projectData = {
    title: "The Oasis",
    subtitle: "Al-Kabir Orchard",
    heroImage: "/assets/images/ak oasis/luxery.webp",
    overview: "The Oasis is a premium residential enclave within Al-Kabir Orchard, designed to be a sanctuary of peace and luxury. With a focus on green living and modern amenities, it offers residents a tranquil lifestyle away from the city's hustle while remaining perfectly connected.",
    details: [
      { label: "Location", value: "Main GT Road, Lahore" },
      { label: "Project", value: "Al-Kabir Orchard" },
      { label: "Type", value: "Residential Enclave" },
      { label: "Status", value: "Exclusive Living" }
    ],
    amenities: [
      { name: "Eco-Friendly", icon: "🌱" },
      { name: "Theme Park", icon: "🎡" },
      { name: "Health Care", icon: "🏥" },
      { name: "24/7 Security", icon: "🛡️" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Jogging Track", icon: "🏃‍♂️" },
      { name: "Water Filtration", icon: "💧" },
      { name: "Community Center", icon: "🏢" }
    ],
    gallery: [
      "/assets/images/ak oasis/community-centre.webp",
      "/assets/images/ak oasis/grand-mosque.webp",
      "/assets/images/ak oasis/waterpark.webp",
      "/assets/images/ak oasis/archery-range.webp"
    ],
    paymentPlan: "/assets/images/ak oasis/Payment-Plan.webp",
    masterPlan: "/assets/images/ak oasis/masterplan.webp",
    accentColor: "gold"
  };

  return <ProjectPage {...projectData} />;
};

export default Theoasisbyalkabir;
