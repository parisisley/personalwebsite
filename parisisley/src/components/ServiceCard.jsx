import React from "react";
import "./ServiceCard.css"; // Import the new styles

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.imageUrl} alt={service.title} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
