import { FC, useState } from 'react';
import classnames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import './SecondarySlider.scss';

SwiperCore.use([Navigation]);

type Props = {
  products: string[];
  title: string;
};

export const SecondarySlider: FC<Props> = ({ products, title }) => {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleReachEnd = () => {
    setIsEnd(true);
  };

  const handleReachStart = () => {
    setIsStart(true);
  };

  const handleSlidesChange = () => {
    if (isStart) {
      setIsStart(false);
    }

    if (isEnd) {
      setIsEnd(false);
    }
  };

  return (
    <section className="secondary-slider">
      <div className="secondary-slider__top-actions">
        <h2 className="secondary-slider__title">{title}</h2>

        <div className="secondary-slider__arrow-container">
          <div
            className={classnames(
              'secondary-slider__arrow',
              'secondary-slider__arrow--left',
              {
                'secondary-slider__arrow--left--disabled': isStart,
              },
              {
                'secondary-slider__arrow--left--hover': !isStart,
              },
            )}
            aria-disabled={isStart}
          />

          <div
            className={classnames(
              'secondary-slider__arrow',
              'secondary-slider__arrow--right',
              {
                'secondary-slider__arrow--right--disabled': isEnd,
              },
              {
                'secondary-slider__arrow--right--hover': !isEnd,
              },
            )}
            aria-disabled={isEnd}
          />
        </div>
      </div>

      <div className="secondary-slider__swiper-container">
        <Swiper
          className="swiper"
          navigation={{
            nextEl: '.secondary-slider__arrow--right',
            prevEl: '.secondary-slider__arrow--left',
          }}
          slidesPerView="auto"
          spaceBetween={16}
          onReachEnd={() => handleReachEnd()}
          onReachBeginning={() => handleReachStart()}
          onSlideChange={() => handleSlidesChange()}
        >
          {products.map(product => (
            <SwiperSlide key={product} className="secondary-slider__card">
              {product}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
