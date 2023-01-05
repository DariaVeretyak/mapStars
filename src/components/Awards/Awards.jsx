import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import './Awards.scss';

export const Awards = () => {
  const awards = [];

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
        {t('awards.text2')}
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
