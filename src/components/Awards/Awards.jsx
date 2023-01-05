import React from 'react';
import Fade from 'react-reveal/Fade';
import translationEN from '../../locales/en/translation.json';
import translationUA from '../../locales/ua/translation.json';
import translationRU from '../../locales/ru/translation.json';
import { useTranslation } from 'react-i18next';
import './Awards.scss';

export const Awards = () => {
  const awards = [];
  const arr = useTranslation();

  let translation;
  if (arr.i18n.language == 'Eng') {
    translation = translationEN;
  } else if (arr.i18n.language == 'Rus') {
    translation = translationRU;
  } else if (arr.i18n.language == 'Ukr') {
    translation = translationUA;
  }

  for (let i = 1; i <= 8; i += 1) {
    awards.push(i);
  }

  const { t } = useTranslation();

  return (
    <section className="Awards App__section">
      <Fade delay={300} bottom>
        <h2 className="Awards__title">Our awards</h2>
      </Fade>
      <p className="Awards__subtitle">
        Our company has a number of cities in the service of Google and Booking
      </p>
      <div className="Awards__companies">
        {awards.map(award => (
          <Fade right delay={award * 300}>
            <div key={award} className={`Awards__company Awards__company--${award}`} />
          </Fade>
        ))}
      </div>
    </section>
  );
};
