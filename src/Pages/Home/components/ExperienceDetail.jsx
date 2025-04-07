import React from "react";
import { useLocation } from "react-router-dom";

export default function ExperienceDetail() {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <p>Experience details not found.</p>;
  }

  return (
    <section className="experience-detail">
      <h1>{item.title}</h1>
      <img src={item.src} alt={item.title} />
      <p>{item.description}</p>
    </section>
  );
}
