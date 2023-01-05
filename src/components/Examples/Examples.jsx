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
import translationEN from '../../locales/en/translation.json';
import translationUA from '../../locales/ua/translation.json';
import translationRU from '../../locales/ru/translation.json';
import { useTranslation } from 'react-i18next';

import './Slider.scss';
import './Examples.scss';

export const Examples = () => {
  const arr = useTranslation();

  let translation;

  if (arr.i18n.language == 'Eng') {
    translation = translationEN;
  } else if (arr.i18n.language == 'Rus') {
    translation = translationRU;
  } else if (arr.i18n.language == 'Ukr') {
    translation = translationUA;
  }

  return (
    <section className="Examples App__section">
      <Fade delay={300} bottom>
        <h2 className="Examples__title">
          Implementation examples
        </h2>
      </Fade>
      <div className="Examples__content">
        <div className="Examples__prev">
          <div className="Examples__block">
            <p className="Examples__increase">
              Increase in the flow of customers
            </p>
            <p className="Examples__indicators">+40%</p>
          </div>
          <div className="Examples__block" />
          <div className="Examples__block" />
          <div className="Examples__block">
            <p className="Examples__increase">
              Increase in the flow of customers
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
            <h3 className="Slider__title">Car wash Ceramic Pro Latvia</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  Ceramic Pro is the first client of the company in Latvia,
                  as well as the first client abroad.
                </p>
                <p className="Slider__info">
                  After changing the car wash system and approach to working
                  with the client, under the new Ceramic Pro brand, the task
                  was to bring more customers in the 16/17 tourist season than
                  in the 15/16 season.
                </p>
                <p className="Slider__info">
                  The main focus of the photo session/photo presentation was to be
                  the Ceramic Pro logo and new corporate identity, as well as the
                  workflow and higher level of the average customer. This project
                  has become a pilot project for our company in terms of introducing
                  a unique Motivator design with the logo of the client&apos;s
                  company. The task was also to orient the issue in Google search
                  for a Russian-speaking tourist/client.
                </p>
                <p className="Slider__info">
                  The result was not long in coming, already in the next 16/17 season
                  in Jurmala, 17% more customers turned to the car wash than in the
                  15/16 season. According to our forecasts, they should grow up to 25%
                  over the next
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Slider__block">
              <h3 className="Slider__title">Slide2</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam commodi laboriosam assumenda praesentium sunt! Dolor, possimus quos nostrum ullam nam voluptatum, facilis inventore cumque dolore porro consequatur distinctio aliquam!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Slider__block">
              <h3 className="Slider__title">Slide3</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium veritatis velit ea dolorem non, dolor aliquam voluptates odio reiciendis accusantium voluptate sint dolores illum recusandae cum, eveniet libero inventore!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Slider__block">
              <h3 className="Slider__title">Slide4</h3>
              <div className="Slider__infoBlock">
                <p className="Slider__info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, voluptatibus temporibus rem beatae dicta dolores, excepturi, quasi quod qui vero adipisci voluptas at et ipsam quos culpa quibusdam optio laboriosam.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
