import React from 'react';
import PropTypes from 'prop-types';
import packages from '../../api/packages.json';
import './Packages.scss';

export const Packages = ({ getStarted, packagesRef }) => (
  <section className="Packages" ref={packagesRef}>
    <h2 className="Packages__title">Packages services</h2>
    <ul className="Packages__packages">
      {packages.map(pack => (
        <li key={pack.name} className="Packages__package">
          <div className={`Packages__package-top Packages__package-top--${pack.name}`}>
            <h4 className="Packages__package-name">{pack.title}</h4>
            <p className="Packages__package-whom">{pack.whom}</p>
          </div>
          <h3 className="Packages__includes">The package includes:</h3>
          <ul className="Packages__options">
            {pack.includes.map(option => (
              <li
                key={option}
                className="Packages__option"
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            className="Packages__btn"
            type="button"
            onClick={() => getStarted()}
          >
            Get started
          </button>
        </li>
      ))}
    </ul>
  </section>
);

Packages.propTypes = {
  getStarted: PropTypes.func.isRequired,
  packagesRef: PropTypes.objectOf(PropTypes.string).isRequired,
};