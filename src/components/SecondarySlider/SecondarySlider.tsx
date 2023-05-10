import React from 'react';

import * as images from '../../assets';
import './SecondarySlider.scss';

type Props = {
  products: string[],
  title: string,
};

export const SecondarySlider: React.FC<Props> = ({
  products,
  title,
}) => {
  return (
    <section>
      <div className="secondary-slider__top-actions">
        <h1>{title}</h1>

        <div className="secondary-slider__buttons">
          <div className="secondary-slider__button-left">
            <img
              src={images.arrow_left}
              alt="Slider arrow to the left"
            />
          </div>

          <div className="secondary-slider__button-right">
            <img
              src={images.arrow_right}
              alt="Slider arrow to the right"
            />
          </div>
        </div>
      </div>
      {products.map(
        product => <p className="secondary-slider__card">{product}</p>,
      )}
    </section>
  );
};
