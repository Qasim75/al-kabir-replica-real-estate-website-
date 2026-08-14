import React from 'react';
import ProjectPage from './ProjectPageTemplate';

const Alkabirdowntown = () => {
  const projectData = {
    title: "Al-Kabir Downtown",
    subtitle: "The Commercial Heart",
    heroImage: "/assets/images/ak downtown/front.jpg",
    overview: "Spanning 600 kanals with a massive 1,400-feet frontage on Main Raiwind Road, Al-Kabir Downtown is set to become Lahore's premier commercial hub. Featuring smart gate entrances, renewable energy, and a 5-star hotel, it offers a future-ready investment destination for high-end retail and corporate sectors.",
    details: [
      { label: "Location", value: "Main Raiwind Road, Lahore" },
      { label: "Total Area", value: "600 Kanals" },
      { label: "Commercial", value: "5.33 & 10 Marla" },
      { label: "Frontage", value: "1,400 Feet" }
    ],
    amenities: [
      { name: "Smart Gate", icon: "🚪" },
      { name: "Renewable Energy", icon: "☀️" },
      { name: "5-Star Hotel", icon: "🏨" },
      { name: "IT Towers", icon: "🏢" },
      { name: "Helipad", icon: "🚁" },
      { name: "Food Street", icon: "🍕" },
      { name: "Trafalgar Square", icon: "⛲" },
      { name: "Waterfront Bays", icon: "🌊" }
    ],
    gallery: [
      "/assets/images/ak downtown/gallery1.webp",
      "/assets/images/ak downtown/gallery2.webp",
      "/assets/images/ak downtown/gallery3.webp"
    ],
    masterPlan: "/assets/images/ak downtown/downtown-map-1536x1095.webp",
    accentColor: "blue"
  };

  return <ProjectPage {...projectData} />;
};

export default Alkabirdowntown;
