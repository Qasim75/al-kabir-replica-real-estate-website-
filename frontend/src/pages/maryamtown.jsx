import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Maryamtown = () => {
  const projectData = {
    title: "Maryam Town",
    subtitle: "Elegance & Accessibility",
    heroImage: "/assets/images/ak maryam/overview.jpg",
    overview: "Maryam Town is a modern and elegant living place designed for a luxurious lifestyle. Located just 5 minutes from Adda Plot on Main Raiwind Road, it offers exceptional accessibility. Developed by Al-Kabir Developers, the project features residential and commercial plots with an easy 3-year installment plan.",
    details: [
      { label: "Location", value: "Main Raiwind Road, Lahore" },
      { label: "Residential", value: "3 & 5 Marla" },
      { label: "Commercial", value: "4 Marla" },
      { label: "Installment", value: "3-Year Plan" }
    ],
    amenities: [
      { name: "24/7 Power", icon: "⚡" },
      { name: "Gym Center", icon: "🏋️‍♂️" },
      { name: "Health Care", icon: "🏥" },
      { name: "Security", icon: "🛡️" },
      { name: "Gated Community", icon: "🚧" },
      { name: "Education", icon: "🎓" },
      { name: "Grand Mosque", icon: "🕌" },
      { name: "Kids Play Area", icon: "🎠" }
    ],
    gallery: [
      "/assets/images/ak maryam/overview.jpg",
      "/assets/images/ak maryam/masterplan.webp"
    ],
    masterPlan: "/assets/images/ak maryam/masterplan.webp",
    accentColor: "gold"
  };

  return <ProjectPage {...projectData} />;
};

export default Maryamtown;
