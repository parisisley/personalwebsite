import React from 'react';
import './Services.css'; // If styles are shared, otherwise create a separate ServiceCard.css

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
