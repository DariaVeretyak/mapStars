import React from 'react';
import PropTypes from 'prop-types';
import advantages from '../../api/advantage.json';
import './Advantages.scss';

export const Advantages = ({ advantagesRef }) => (
  <section className="Advantages App__section" ref={advantagesRef}>
    <h2 className="Advantages__title">
      Advantages
    </h2>
    <ul
      className="Advantages__list"
    >
      {advantages.map(advantage => (
        <li key={advantage.name} className="Advantages__block">
          <div
            className={`Advantages__logo Advantages__logo--${advantage.number}`}
          />
          <h4 className="Advantages__block-name">{advantage.name}</h4>
          <p className="Advantages__block-info">{advantage.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

Advantages.propTypes = {
  advantagesRef: PropTypes.string.isRequired,
};
