import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import advantagesEng from '../../api/advantageEng.json';
import advantagesRus from '../../api/advantageRus.json';
import advantagesUkr from '../../api/advantageUkr.json';
// import advantagesGer from '../../api/advantageGer.json';
import translationEN from '../../locales/en/translation.json';
import translationUA from '../../locales/ua/translation.json';
import translationRU from '../../locales/ru/translation.json';
import { useTranslation } from 'react-i18next';
import './Advantages.scss';

export const Advantages = ({ advantagesRef }) => {
  const arr = useTranslation();
  const { t } = useTranslation();

  let advantages;
  let translation;
  
  if (arr.i18n.language == 'Eng') {
    translation = translationEN;
    advantages = advantagesEng;
  } else if (arr.i18n.language == 'Rus') {
    translation = translationRU;
    advantages = advantagesRus;
  } else if (arr.i18n.language == 'Ukr') {
    translation = translationUA;
    advantages = advantagesUkr;
  }

  return (
    <section className="Advantages App__section" ref={advantagesRef}>
      <Fade delay={300} bottom>
        <h2 className="Advantages__title">
          {translation.H.Advantages}
        </h2>
      </Fade>
      <ul
        className="Advantages__list"
      >
        {advantages && advantages.map(advantage => (
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
  )
}

Advantages.propTypes = {
  advantagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
