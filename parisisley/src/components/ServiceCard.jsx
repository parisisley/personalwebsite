import React, { useState } from 'react';

const ServiceCard = ({ title, image, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
            <h3>{title}</h3>
            <button className="service-button" onClick={toggleInfo}>
                {showInfo ? "Hide Info" : "More Info"}
            </button>
            {showInfo && <div className="service-info">{info}</div>}
        </div>
    );
};

export default ServiceCard;
