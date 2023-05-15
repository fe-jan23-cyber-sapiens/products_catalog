import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeSlider.scss';
import { FC } from 'react';

export const HomeSlider: FC = () => {
  return (
    <div className="main-carousel">
      <Carousel interval={5000}>
        <Carousel.Item>
          <div
            className="
              main-carousel__image
              main-carousel__image--main
            "
          />
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="
              main-carousel__image
              main-carousel__image--second
            "
          />
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="
              main-carousel__image
              main-carousel__image--third
            "
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
