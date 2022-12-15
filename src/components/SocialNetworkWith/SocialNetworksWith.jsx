import React from 'react';
import image from '../../images/networks.png';
import './SocialNetworksWith.scss';

export const SocialNetworksWith = () => (
  <section className="SocialNetworksWith App__section">
    <div className="SocialNetworksWith__images">
      <img
        className="SocialNetworksWith__img"
        src={image}
        alt="girl with phone"
      />
    </div>
    <div className="SocialNetworksWith__content">
      <h2 className="SocialNetworksWith__title">
        <span className="SocialNetworksWith__title--span">
          Social networks &nbsp;
        </span>
        with GEO advertising technology
      </h2>
      <p className="SocialNetworksWith__info">
        Any business seeks to make a profit through customer satisfaction.
        But satisfying such needs, no business seeks to use the client to
        promote their product or service. This happens on its own, in the
        form of &quot;word of mouth&quot;, as it is popularly called. Modern
        business keeps in touch with the client using mobile applications
        such as Instagram, Telegram or Twitter, instant messengers (Viber,
        Skype, WhatsApp), or social networks (Facebook, etc.).
      </p>
      <p className="SocialNetworksWith__info">
        What if we offer you a simple technique that will allow you to bring
        more new customers at the expense of old ones, using social networks
        and mobile applications? Moreover, not on the scale of a simple word
        of mouth, but a modern one, using the above social networks and mobile
        applications?
      </p>
      <p className="SocialNetworksWith__info">
        With a few simple implementation steps, and simple instructions for use
        and your clients will work for you.
      </p>
      <p className="SocialNetworksWith__info">
        Geo advertising from Stars Maps is the word of mouth of our time.
      </p>
      <p className="SocialNetworksWith__info SocialNetworksWith__info--main">
        GEO technology - word of mouth of the modern digital market!
      </p>
    </div>
  </section>
);
