import React from 'react';
import ServiceCard from './ServiceCard';
import './styles.css';

const Services = () => {
    const services = [
        { title: 'Service 1', image: '/assets/images/service1.jpg', info: 'Detailed information about Service 1...' },
        { title: 'Service 2', image: '/assets/images/service2.jpg', info: 'Detailed information about Service 2...' },
        { title: 'Service 3', image: '/assets/images/service3.jpg', info: 'Detailed information about Service 3...' }
    ];

    return (
        <section id="services">
            <h2>My Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        image={service.image}
                        info={service.info}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
