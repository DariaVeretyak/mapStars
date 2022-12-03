import React from 'react';
import './Services.scss';

export const Services = () => {
  const apps = [];

  for (let i = 1; i <= 14; i += 1) {
    apps.push(i);
  }

  return (
    <section className="Services">
      <div className="Services__info">
        <h2 className="Services__title">30+</h2>
        <p className="Services__subtitle">
          We work with such
          <br />
          services
        </p>
        <div className="Services__apps">
          {apps.map(app => (
            <div key={app} className={`Services__app Services__app--${app}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
