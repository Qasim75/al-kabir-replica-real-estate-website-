import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Kingstownphase2 = () => {
  const projectData = {
    title: "Kings Town",
    subtitle: "Phase II - Modern Living",
    heroImage: "/assets/images/ak kings 2/overview.jpg",
    overview: "In 2021, Al-Kabir Developers officially launched Kings Town Phase II after the successful completion of Phase I. The project was thoughtfully planned to deliver improved facilities and a better living environment, offering a peaceful, secure, and comfortable lifestyle for families.",
    details: [
      { label: "Location", value: "Main Raiwind Road, Lahore" },
      { label: "Residential", value: "3, 5, 8, 10 Marla" },
      { label: "Commercial", value: "2 - 6 Marla" },
      { label: "Status", value: "Under Construction" }
    ],
    amenities: [
      { name: "24/7 Power", icon: "⚡" },
      { name: "Theme Park", icon: "🌳" },
      { name: "Health Care", icon: "🏥" },
      { name: "Security", icon: "🛡️" },
      { name: "Education", icon: "🎓" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Shopping Mall", icon: "🛍️" },
      { name: "Community", icon: "🏘️" }
    ],
    gallery: [
      "/assets/images/ak kings 2/g1.jpg",
      "/assets/images/ak kings 2/g2.jpg",
      "/assets/images/ak kings 2/g3.jpg",
      "/assets/images/ak kings 2/g4.jpg",
      "/assets/images/ak kings 2/g5.jpg",
      "/assets/images/ak kings 2/g6.jpg"
    ],
    masterPlan: "/assets/images/ak kings 2/Master plan.webp",
    accentColor: "blue"
  };

  return <ProjectPage {...projectData} />;
};

export default Kingstownphase2;
