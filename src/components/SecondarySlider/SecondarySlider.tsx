/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect, useState } from 'react';
import classnames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Spinner from 'react-bootstrap/Spinner';

import client from '../../api/fetching';
import { Product } from '../../utils/typedefs';
import { CardItem } from '../CardItem';

import 'swiper/css';
import 'swiper/css/navigation';
import './SecondarySlider.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

SwiperCore.use([Navigation]);

type Props = {
  endpoint: string;
  title: string;
};

export const SecondarySlider: FC<Props> = ({ endpoint, title }) => {
  const [products, setProducts] = useState<Product[]>();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      let productsFromServer;

      try {
        switch (endpoint) {
          case 'new':
            productsFromServer = await client.getNewProducts();
            break;

          case 'discount':
            productsFromServer = await client.getDiscountProducts();
            break;

          case 'recommended':
            productsFromServer = await client.getRecommendedProducts();
            break;

          default:
            setHasError(true);
        }
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }

      setProducts(productsFromServer);
    };

    getProducts();
  }, []);

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
    <section className="secondary-slider" key={endpoint}>
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
                'secondary-slider__arrow--right--disabled': isEnd || hasError,
              },
              {
                'secondary-slider__arrow--right--hover': !isEnd && !hasError,
              },
            )}
            aria-disabled={isEnd}
          />
        </div>
      </div>

      <div className="secondary-slider__swiper-container">
        {isLoading && (
          <Spinner variant="dark" />
        )}

        {hasError && (
          <h5 style={{ color: 'red' }}>Error occured when loading data</h5>
        )}

        {!hasError && !isLoading && products?.length && (
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
              <SwiperSlide
                key={product.id}
                className="secondary-slider__card"
              >
                <div className="secondary-slider__card-wrapper">
                  <CardItem product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
