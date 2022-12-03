import React from 'react';
import {
  Autoplay,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import './Slider.scss';

export const Slider = () => (
  <Swiper
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay, Pagination]}
    pagination={{ clickable: true }}
    className="Slider"
  >

    <SwiperSlide>
      <div className="Slider__block">
        <h3 className="Slider__title">Car wash Ceramic Pro Latvia</h3>
        <p className="Slider__info">
          Ceramic Pro is the first client of the company in Latvia,
          as well as the first client abroad.
          After changing the car wash system and approach to working
          with the client, under the new Ceramic Pro brand, the task
          was to bring more customers in the 16/17 tourist season than
          in the 15/16 season.
          The main focus of the photo session/photo presentation was to be
          the Ceramic Pro logo and new corporate identity, as well as the
          workflow and higher level of the average customer. This project
          has become a pilot project for our company in terms of introducing
          a unique Motivator design with the logo of the client&apos;s company.
          The task was also to orient the issue in Google search for a
          Russian-speaking tourist/client.
          The result was not long in coming, already in the next 16/17 season
          in Jurmala, 17% more customers turned to the car wash than in the
          15/16 season. According to our forecasts, they should grow up to 25%
          over the next
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="Slider__block">
        <h3 className="Slider__title">Slide2</h3>
        <p className="Slider__info">
          Ceramic Pro is the first client of the company in Latvia,
          as well as the first client abroad.
          After changing the car wash system and approach to working
          with the client, under the new Ceramic Pro brand, the task
          was to bring more customers in the 16/17 tourist season than
          in the 15/16 season.
          The main focus of the photo session/photo presentation was to be
          the Ceramic Pro logo and new corporate identity, as well as the
          workflow and higher level of the average customer. This project
          has become a pilot project for our company in terms of introducing
          a unique Motivator design with the logo of the client&apos;s company.
          The task was also to orient the issue in Google search for a
          Russian-speaking tourist/client.
          The result was not long in coming, already in the next 16/17 season
          in Jurmala, 17% more customers turned to the car wash than in the
          15/16 season. According to our forecasts, they should grow up to 25%
          over the next
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="Slider__block">
        <h3 className="Slider__title">Slide3</h3>
        <p className="Slider__info">
          Ceramic Pro is the first client of the company in Latvia,
          as well as the first client abroad.
          After changing the car wash system and approach to working
          with the client, under the new Ceramic Pro brand, the task
          was to bring more customers in the 16/17 tourist season than
          in the 15/16 season.
          The main focus of the photo session/photo presentation was to be
          the Ceramic Pro logo and new corporate identity, as well as the
          workflow and higher level of the average customer. This project
          has become a pilot project for our company in terms of introducing
          a unique Motivator design with the logo of the client&apos;s company.
          The task was also to orient the issue in Google search for a
          Russian-speaking tourist/client.
          The result was not long in coming, already in the next 16/17 season
          in Jurmala, 17% more customers turned to the car wash than in the
          15/16 season. According to our forecasts, they should grow up to 25%
          over the next
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="Slider__block">
        <h3 className="Slider__title">Slide4</h3>
        <p className="Slider__info">
          Ceramic Pro is the first client of the company in Latvia,
          as well as the first client abroad.
          After changing the car wash system and approach to working
          with the client, under the new Ceramic Pro brand, the task
          was to bring more customers in the 16/17 tourist season than
          in the 15/16 season.
          The main focus of the photo session/photo presentation was to be
          the Ceramic Pro logo and new corporate identity, as well as the
          workflow and higher level of the average customer. This project
          has become a pilot project for our company in terms of introducing
          a unique Motivator design with the logo of the client&apos;s company.
          The task was also to orient the issue in Google search for a
          Russian-speaking tourist/client.
          The result was not long in coming, already in the next 16/17 season
          in Jurmala, 17% more customers turned to the car wash than in the
          15/16 season. According to our forecasts, they should grow up to 25%
          over the next
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
);
