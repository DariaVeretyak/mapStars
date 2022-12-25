import React from 'react';
import Fade from 'react-reveal/Fade';
import { Slider } from '../Slider/Slider';
import './Examples.scss';

export const Examples = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className="Examples App__section">
      <Fade delay={300} bottom>
        <h2 className="Examples__title">Implementation examples</h2>
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
        <Slider
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
        />
        <div className="Slider__actions">
          <button
            type="button"
            className="Slider__btn Slider__prev"
            ref={navigationPrevRef}
            // onClick={() => swiperRef.current?.slidePrev()}
          />
          <button
            type="button"
            className="Slider__btn Slider__next"
            ref={navigationNextRef}
            // onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
};
