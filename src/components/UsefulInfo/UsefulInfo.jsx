import React from 'react';
import './UsefulInfo.scss';

export const UsefulInfo = () => (
  <section className="UsefulInfo App__section">
    <div className="UsefulInfo__content">
      <h4 className="UsefulInfo__subtitle">Useful information</h4>
      <h2 className="UsefulInfo__title">How does Google Search work?</h2>
      <p className="UsefulInfo__info">
        Today, the largest search resource on the planet is Google Search.
        It is practically a monopoly in the field of information search.
        That is why our company, when creating its GEO advertising technology,
        used this system as a basis.
        <br />
        <br />
        Let&apos;s figure out together how exactly Google Search works.
        When a user enters a search query, Google Search processes it in less
        than one second and returns the search results in a specific sequence.
        <br />
        <br />
        Android phones, 75% of phones based on other systems, as well as
        laptops and home computers use Google in one or another way.
      </p>

      <div className="UsefulInfo__firstBlock">
        <h2 className="UsefulInfo__title UsefulInfo__title--firstBlock">
          First block:
          <br />
          <span className="UsefulInfo__title UsefulInfo__title--firstBlock">
            Advertisements
          </span>
        </h2>
        <p className="UsefulInfo__info UsefulInfo__info--first">
          Search results tagged &quot;advertising&quot;. Such ads are always
          displayed at the top of the list (from 1 to 4 ads) and at the bottom
          of the list (from 1 to 5 ads). The place in the list is determined by
          the Google Adwords auction.
          Google Adwords guarantees your ad or website visits but requires
          constant financial investment. For example, the cost of such
          advertising per month for clothing stores in Lisbon will be about
          5000 €. and more. Agree, not every small or medium business can afford
          such an advertising budget. However, our clients often use Adwords in
          tandem with GEO advertising.
        </p>
      </div>
    </div>
    <div className="UsefulInfo__images" />
  </section>
);
