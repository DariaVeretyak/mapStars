import React from 'react';
import './SettingUp.scss';

export const SettingUp = () => (
  <section className="SettingUp">
    <div className="SettingUp__info">
      <h2 className="SettingUp__title">Setting up</h2>
      <div className="SettingUp__nav">
        <button
          className="SettingUp__btn SettingUp__btn--adWords"
          type="button"
        >
          AdWords ads
        </button>
        <button
          className="SettingUp__btn SettingUp__btn--booking"
          type="button"
        >
          <a
            className="SettingUp__link"
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Booking.com
          </a>
        </button>
      </div>
      <p className="SettingUp__content">
        Any business seeks to make a profit through customer satisfaction.
        But satisfying such needs, no business seeks to use the client to
        promote their product or service. This happens on its own, in the
        form of &quot;word of mouth&quot;, as it is popularly called. Modern
        business keeps in touch with the client using mobile applications
        such as Instagram, Telegram or Twitter, instant messengers (Viber,
        Skype, WhatsApp), or social networks (Facebook, etc.).
        <br />
        <br />
        What if we offer you a simple technique that will allow you to bring
        more new customers at the expense of old ones, using social networks
        and mobile applications? Moreover, not on the scale of a simple word
        of mouth, but a modern one, using the above social networks and mobile
        applications?
        <br />
        <br />
        With a few simple implementation steps, and simple instructions for use
        and your clients will work for you.
      </p>
    </div>
    <div className="SettingUp__images" />
  </section>
);
