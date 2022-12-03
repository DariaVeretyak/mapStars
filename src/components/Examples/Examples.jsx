import React from 'react';
import { Slider } from '../Slider/Slider';
import './Examples.scss';

export const Examples = () => (
  <section className="Examples App__section">
    <h2 className="Examples__title">Implementation examples</h2>
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
      <Slider />
    </div>
  </section>
);
