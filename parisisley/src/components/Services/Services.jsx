import React from 'react';
import ServiceCard from '../ServiceCard'; // Import from one level up
import './Services.css';
import webdesign from '../images/webdesign.png'; // Ensure the path is correct

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Building modern, responsive websites.',
      imageUrl: '/path/to/image1.jpg',
    },
    {
      title: 'Graphic Design',
      description: 'Designing eye-catching visuals.',
      imageUrl: '/path/to/image2.jpg',
    },
    {
      title: 'Graphic Design',
      description: 'Designing eye-catching visuals.',
      imageUrl: '/path/to/image2.jpg',
    },
    {
      title: 'Web Design',
      description: 'Designing eye-catching visuals.',
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
