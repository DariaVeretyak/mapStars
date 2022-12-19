import React from 'react';
import PropTypes from 'prop-types';
import img1 from '../../images/howWork1.jpg';
import img2 from '../../images/howWork2_1.png';
import img3 from '../../images/howWork3_1.png';
import './HowWork.scss';
import './HowWorkBlock.scss';

export const HowWork = ({ howWorkRef }) => (
  <section className="HowWork" ref={howWorkRef}>
    <h2 className="HowWork__title">
      How does it work?
    </h2>
    <p className="HowWork__steps">
      Three easy steps to implement GEO technology
    </p>
    <div className="HowWork__content">
      <div className="HowWork__step HowWork__step--1">
        <div className="HowWork__images HowWork__images--1">
          <img
            className="HowWork__img"
            src={img1}
            alt="how registration phone"
          />
        </div>
        <div className="HowWorkBlock HowWorkBlock--1">
          <p className="HowWorkBlock__step">01</p>
          <h3 className="HowWorkBlock__title">Registration</h3>
          <div className="HowWorkBlock__contentBlock">
            <p className="HowWorkBlock__content">
              At the first stage, our specialists register your business
              in the Google My Business global business directory, as well
              as in some other services. We will collect and publish:
              basic information about your business (description, exact
              address, photos, phone numbers, work schedule), and optimize
              and customize the profile of the institution.
            </p>
            <p className="HowWorkBlock__content">
              Our company will be glad to offer you a standard photo session
              of your business. As well as a modern 360° panoramic photo
              session.
            </p>
            <p className="HowWorkBlock__content">
              If your company does not have a website, we will set up a
              free business page for you from Google or a more advanced
              version from Stars Maps.
            </p>
            <p className="HowWorkBlock__content">
              Google search provides the user with information about
              nearby, popular, and accessible places. After registration,
              potential visitors can easily find information about your
              business using Google Search, and Google Maps. By registering,
              you will increase the number of new customers and calls for
              your business.
            </p>
          </div>
        </div>
      </div>
      <div className="HowWork__step HowWork__step--2">
        <div className="HowWorkBlock">
          <p className="HowWorkBlock__step">02</p>
          <h3 className="HowWorkBlock__title">
            The technology of Motivation and Social Recommendations
          </h3>
          <div className="HowWorkBlock__contentBlock">
            <p className="HowWorkBlock__content">
              Motivation technology is a proprietary development of our
              company. It is designed to increase the number of reviews
              and recommendations about your business at the expense of
              old customers, which directly affects the number of new
              customers.
            </p>
            <p className="HowWorkBlock__content">
              To implement the technology, we use carriers - motivators.
              They come in various formats: a tabletop, a signboard, a
              banner, a business card, a sticker, a product packaging
              element, a leaflet, and so on. Our task is to integrate
              the use of the motivator into your business process.
            </p>
            <p className="HowWorkBlock__content">
              With your help or on your own, the client, using a mobile
              device, read the QR code from the motivator and goes to a
              special website of the institution&apos;s complaint. On this
              page, he will be able to share social recommendations and
              leave feedback about visiting your establishment, thus
              promoting you on the network. Advertising messages about
              your establishment will be distributed on social networks
              (Facebook, Instagram) or in the form of messages via
              instant messengers (Viber, WhatsApp, Telegram).
            </p>
            <p className="HowWorkBlock__content">
              The introduction of technology significantly increases the
              number of reviews left on Google Maps, which subsequently
              increases the popularity and frequency of issuance in
              Google services. Each client turns into a tool to attract
              new visitors, our technology is a modern version of word
              of mouth for your business.
            </p>
          </div>
        </div>
        <div className="HowWork__images HowWork__images--2">
          <img
            className="HowWork__img"
            src={img2}
            alt="technology"
          />
        </div>
      </div>
      <div className="HowWork__step HowWork__step--3">
        <div className="HowWork__images HowWork__images--3">
          <img
            className="HowWork__img"
            src={img3}
            alt="how analytic"
          />
        </div>
        <div className="HowWorkBlock HowWorkBlock--3">
          <p className="HowWorkBlock__step">03</p>
          <h3 className="HowWorkBlock__title">
            Statistics, analytics, development, support
          </h3>
          <div className="HowWorkBlock__contentBlock">
            <p className="HowWorkBlock__content">
              Thanks to modern technologies, information
              is easily recorded and collected for further analysis.
              In your Google My Business personal account of your
              institution, you can see complete statistics about views,
              the number of calls, and routes laid. At your request,
              we can provide additional reports and recommendations,
              following which you can more effectively and quickly
              promote your services and products on the market. Our
              clients can always contact us for advice.
            </p>
            <p className="HowWorkBlock__content">
              Like you, our company is constantly growing and developing.
              Very soon we plan to bring to the market new proposals for
              advertising and development. Now we are working on a system
              for measuring customer loyalty and a video presentation
              of the institution.
            </p>
            <p className="HowWorkBlock__content">
              Our research department is constantly working on testing
              promotional elements of Google, Facebook, Instagram, and
              other platforms. Staying in touch with us, you will always
              learn about the latest in the world of advertising. The
              success of your business is in our interest. Stars Maps
              is a new generation advertising agency and technology!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

HowWork.propTypes = {
  howWorkRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
