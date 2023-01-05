import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useTranslation } from 'react-i18next';

import './Slider.scss';
import './Examples.scss';

export const Examples = () => {
  const { t } = useTranslation();

  return (
    <section className="Examples App__section">
      <Fade delay={300} bottom>
        <h2 className="Examples__title">{t('Examples.text1')}</h2>
      </Fade>
      <div className="Examples__content">
        <div className="Examples__prev">
          <div className="Examples__block">
            <p className="Examples__increase">
              {t('Examples.text2')}
            </p>
            <p className="Examples__indicators">+40%</p>
          </div>
          <div className="Examples__block" />
          <div className="Examples__block" />
          <div className="Examples__block">
            <p className="Examples__increase">
              {t('Examples.text3')}
            </p>
            <p className="Examples__indicators">+10%</p>
          </div>
        </div>
        <div className="Slider__actions">
          <button
            type="button"
            className="Slider__btn Slider__prev"
          />
          <button
            type="button"
            className="Slider__btn Slider__next"
          />
        </div>
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            Mousewheel,
            Keyboard,
          ]}
          navigation={{
            prevEl: '.Slider__prev',
            nextEl: '.Slider__next',
          }}
          pagination={{ clickable: true }}
          mousewheel
          keyboard={{ enabled: true }}
          className="Slider"
        >
          <SwiperSlide>
            <div className="Slider__block">
              <h3 className="Slider__title">{t('Slider.text1')}</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  {t('Slider.text2')}
                </p>
                <p className="Slider__info">
                  {t('Slider.text3')}
                </p>
                <p className="Slider__info">
                  {t('Slider.text4')}
                </p>
                <p className="Slider__info">
                  {t('Slider.text5')}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Slider__block">
              <h3 className="Slider__title">Slide2</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  {t('Slider.text6')}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Slider__block">
              <h3 className="Slider__title">Slide3</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  {t('Slider.text7')}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Slider__block">
              <h3 className="Slider__title">Slide4</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  {t('Slider.text8')}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
