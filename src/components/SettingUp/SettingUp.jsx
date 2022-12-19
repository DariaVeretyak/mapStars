import React, { useState } from 'react';
import classNames from 'classnames';
import img1 from '../../images/setting1.png';
import img2 from '../../images/setting2.png';
import './SettingUp.scss';

export const SettingUp = () => {
  const [isBooking, setIsBooking] = useState(false);

  return (
    <section className="SettingUp">
      <div className="SettingUp__info">
        <h2 className="SettingUp__title">Setting up</h2>
        <div className="SettingUp__nav">
          <button
            className={
              classNames(`SettingUp__btn + ${!isBooking
                ? 'SettingUp__btn--active'
                : ''
              }`)
            }
            type="button"
            onClick={() => setIsBooking(false)}
          >
            AdWords ads
          </button>
          <button
            className={
              classNames(`SettingUp__btn + ${isBooking
                ? 'SettingUp__btn--active'
                : ''
              }`)
            }
            type="button"
            onClick={() => setIsBooking(true)}
          >
            Booking.com
          </button>
        </div>
        {!isBooking ? (
          <div className="SettingUp__contentBlock">
            <p className="SettingUp__content">
              Any business seeks to make a profit through customer satisfaction.
              But satisfying such needs, no business seeks to use the client to
              promote their product or service. This happens on its own, in the
              form of &quot;word of mouth&quot;, as it is popularly called.
              Modern business keeps in touch with the client using mobile
              applications such as Instagram, Telegram or Twitter, instant
              messengers (Viber, Skype, WhatsApp), or social networks (Facebook,
              etc.).
            </p>
            <p className="SettingUp__content">
              What if we offer you a simple technique that will allow you to
              bring more new customers at the expense of old ones, using social
              networks and mobile applications? Moreover, not on the scale of
              a simple word of mouth, but a modern one, using the above social
              networks and mobile applications?
            </p>
            <p className="SettingUp__content">
              With a few simple implementation steps, and simple instructions
              for use and your clients will work for you.
            </p>
          </div>
        ) : (
          <div className="SettingUp__contentBlock">
            <p className="SettingUp__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              quo quaerat et ex iste explicabo cupiditate dicta fugiat,
              accusamus dignissimos, eum impedit asperiores.
              Sapiente accusamus eos illum aliquid totam libero!
              Modern business keeps in touch with the client using mobile
              applications such as Instagram, Telegram or Twitter, instant
              messengers.
            </p>
            <p className="SettingUp__content">
              What if we offer you a simple technique that will allow you to
              bring more new customers at the expense of old ones, using social
              networks and mobile applications? Moreover, not on the scale of
              a simple word of mouth, but a modern one, using the above social
              networks and mobile applications?
            </p>
            <p className="SettingUp__content">
              With a few simple implementation steps, and simple instructions
              for use and your clients will work for you.
            </p>
          </div>
        )}
      </div>
      <div className="SettingUp__images">
        <img
          className={
            classNames(`SettingUp__img SettingUp__img--1 + ${isBooking
              ? 'SettingUp__img--hide'
              : ''
            }`)
          }
          src={img1}
          alt="phone adWords"
        />
        <img
          className={
            classNames(`SettingUp__img SettingUp__img--2 + ${!isBooking
              ? 'SettingUp__img--hide'
              : ''
            }`)
          }
          src={img2}
          alt="phone booking.com"
        />
      </div>
    </section>
  );
};
