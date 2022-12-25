import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import advantages from '../../api/advantage.json';
import './Advantages.scss';

export const Advantages = ({ advantagesRef }) => (
  <section className="Advantages App__section" ref={advantagesRef}>
    <Fade delay={300} bottom>
      <h2 className="Advantages__title">
        Advantages
      </h2>
    </Fade>
    <ul
      className="Advantages__list"
    >
      {advantages.map(advantage => (
        <Fade right delay={advantage.number * 300}>
          <li key={advantage.name} className="Advantages__block">
            <div
              className={`Advantages__logo Advantages__logo--${advantage.number}`}
            />
            <h4 className="Advantages__block-name">{advantage.name}</h4>
            <p className="Advantages__block-info">{advantage.description}</p>
          </li>
        </Fade>
      ))}
    </ul>
  </section>
);

Advantages.propTypes = {
  advantagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
