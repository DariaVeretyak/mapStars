import React from 'react';
import PropTypes from 'prop-types';
import './Technology.scss';

export const Technology = ({ techRef }) => {
  const images = [];

  for (let i = 1; i <= 4; i += 1) {
    images.push(i);
  }

  return (
    <section className="Technology App__section" id="technology" ref={techRef}>
      <div className="Technology__images">
        {images.map(img => (
          <div
            key={img}
            className={`Technology__img Technology__img--${img}`}
          />
        ))}
      </div>
      <div className="Technology__content">
        <h2 className="Technology__title">
          Technology
        </h2>
        <span className="Technology__info">
          <strong>
            GEO advertising is a technology for the automatic promotion of a
            business using modern technologies and services.
          </strong>
          <br />
          <br />
          The technology is specially made to promote almost all types of
          businesses. Cafes, restaurants, beauty salons and hairdressers, hotels
          and hostels, service stations and tire shops, repair service centers,
          online stores, grocery stores, supermarkets, photo studios, publishing
          houses, confectioneries, and many others have already used the
          technology.
        </span>
      </div>
    </section>
  );
};

Technology.propTypes = {
  techRef: PropTypes.string.isRequired,
};
