import React from 'react';
import ServiceCard from '../ServiceCard'; // Import from one level up
import './Services.css';
import webdesign from '../images/webdesign.png'; // Ensure the path is correct
import printing from '../images/3Dprinting.png';
import it from '../images/it.png';
function Services() {
  const services = [
    {
      title: '3D Printing',
      description: 'Building modern, responsive websites.',
      imageUrl: printing,
    },
    {
      title: 'Home & Office IT Services',
      description: 'Designing eye-catching visuals.',
      imageUrl: it,
    },
    {
      title: 'Graphic Design',
      description: 'Designing eye-catching visuals.',
      imageUrl: '/path/to/image2.jpg',
    },
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites.',
      imageUrl: webdesign, // Store the image path as a property
    },
    {
      title: 'Graphic Design',
      description: 'Designing eye-catching visuals.',
      imageUrl: '/path/to/image2.jpg',
    },
    // Add more services here
  ];

  return (
    <section id="services">
      <h2>My Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
