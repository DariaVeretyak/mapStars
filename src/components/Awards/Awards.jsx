import React from 'react';
import './Awards.scss';

export const Awards = () => {
  const awards = [];

  for (let i = 1; i <= 8; i += 1) {
    awards.push(i);
  }

  return (
    <section className="Awards App__section">
      <h1 className="Awards__title">Our awards</h1>
      <p className="Awards__subtitle">
        Our company has a number of cities in the service of Google and Booking
      </p>
      <div className="Awards__companies">
        {awards.map(award => (
          <div key={award} className={`Awards__company Awards__company--${award}`} />
        ))}
      </div>
    </section>
  );
};
