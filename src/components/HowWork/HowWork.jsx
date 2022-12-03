import React from 'react';
import PropTypes from 'prop-types';
import { HowWorkBlock } from '../HowWorkBlock/HowWorkBlock';
import './HowWork.scss';

export const HowWork = ({ howWorkRef }) => {
  const text1 = `At the first stage, our specialists register your business
  in the Google My Business global business directory, as well as in
  some other services. We will collect and publish: basic information
  about your business (description, exact address, photos, phone
  numbers, work schedule), and optimize and customize the profile of
  the institution.
  Our company will be glad to offer you a standard photo session of
  your business. As well as a modern 360° panoramic photo session.
  If your company does not have a website, we will set up a free
  business page for you from Google or a more advanced version from
  Stars Maps.
  Google search provides the user with information about nearby,
  popular, and accessible places. After registration, potential
  visitors can easily find information about your business using
  Google Search, and Google Maps. By registering, you will increase
  the number of new customers and calls for your business.`;

  return (
    <section className="HowWork" ref={howWorkRef}>
      <h2 className="HowWork__title">
        How does it work?
      </h2>
      <p className="HowWork__steps">
        Three easy steps to implement GEO technology
      </p>
      <div className="HowWork__content">
        <div className="HowWork__step HowWork__step--1">
          <div className="HowWork__images HowWork__images--1" />
          <HowWorkBlock
            step="01"
            title="Registration"
            content={text1}
          />
        </div>
        <div className="HowWork__step HowWork__step--2">
          <HowWorkBlock
            step="02"
            title="The technology of Motivation and Social Recommendations"
            content="Motivation technology is a proprietary development of our
            company. It is designed to increase the number of reviews and
            recommendations about your business at the expense of old customers,
            which directly affects the number of new customers.
            To implement the technology, we use carriers - motivators. They come
            in various formats: a tabletop, a signboard, a banner, a business
            card, a sticker, a product packaging element, a leaflet, and so on.
            Our task is to integrate the use of the motivator into your business
            process.
            With your help or on your own, the client, using a mobile device,
            read the QR code from the motivator and goes to a special website
            of the institution's complaint. On this page, he will be able to
            share social recommendations and leave feedback about visiting your
            establishment, thus promoting you on the network. Advertising
            messages about your establishment will be distributed on social
            networks (Facebook, Instagram) or in the form of messages via
            instant messengers (Viber, WhatsApp, Telegram).
            The introduction of technology significantly increases the number
            of reviews left on Google Maps, which subsequently increases the
            popularity and frequency of issuance in Google services. Each client
            turns into a tool to attract new visitors, our technology is a
            modern version of word of mouth for your business."
          />
          <div className="HowWork__images HowWork__images--2" />
        </div>
        <div className="HowWork__step HowWork__step--3">
          <div className="HowWork__images HowWork__images--3" />
          <HowWorkBlock
            step="03"
            title="Statistics, analytics, development, support"
            content="Thanks to modern technologies, information
            is easily recorded and collected for further analysis.
            In your Google My Business personal account of your
            institution, you can see complete statistics about views,
            the number of calls, and routes laid. At your request,
            we can provide additional reports and recommendations,
            following which you can more effectively and quickly
            promote your services and products on the market. Our
            clients can always contact us for advice.
            Like you, our company is constantly growing and developing.
            Very soon we plan to bring to the market new proposals for
            advertising and development. Now we are working on a system
            for measuring customer loyalty and a video presentation
            of the institution.
            Our research department is constantly working on testing
            promotional elements of Google, Facebook, Instagram, and
            other platforms. Staying in touch with us, you will always
            learn about the latest in the world of advertising. The
            success of your business is in our interest. Stars Maps
            is a new generation advertising agency and technology!"
          />
        </div>
      </div>
    </section>
  );
};

HowWork.propTypes = {
  howWorkRef: PropTypes.string.isRequired,
};
