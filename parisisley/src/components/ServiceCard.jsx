import React, { useState } from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Service Card */}
      <div className="service-card" onClick={() => setIsOpen(true)}>
        <img src={service.imageUrl} alt={service.title} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>Additional information about this service...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
