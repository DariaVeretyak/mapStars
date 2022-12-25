import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './Technology.scss';

export const Technology = ({ techRef }) => {
  const images = [];

  for (let i = 1; i <= 4; i += 1) {
    images.push(i);
  }

  return (
    <section className="Technology App__section" ref={techRef}>
      <div className="Technology__images">
        {images.map(img => (
          <div
            key={img}
            className={`Technology__img Technology__img--${img}`}
          />
        ))}
      </div>
      <div className="Technology__content">
        <Fade delay={800} bottom>
          <h2 className="Technology__title">
            Technology
          </h2>
        </Fade>
        <Fade delay={1200} bottom>
          <div className="Technology__infoBlock">
            <p className="Technology__subtitle">
              GEO advertising is a technology for the automatic promotion of a
              business using modern technologies and services.
            </p>
            <p className="Technology__info">
              The technology is specially made to promote almost all types of
              businesses. Cafes, restaurants, beauty salons and hairdressers,
              hotels and hostels, service stations and tire shops, repair
              service centers, online stores, grocery stores, supermarkets,
              photo studios, publishing houses, confectioneries, and many
              others have already used the technology.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

Technology.propTypes = {
  techRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
