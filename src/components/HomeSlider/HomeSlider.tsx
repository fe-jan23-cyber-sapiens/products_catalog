import { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeSlider.scss';
import * as videos from '../../assets';

export const HomeSlider: FC = () => {
  return (
    <div className="main-carousel">
      <Carousel interval={6000}>

        <Carousel.Item>
          <div className="main-carousel__video-wrapper">
            <video
              className="main-carousel__video"
              src={videos.appleLogo}
              controls={false}
              autoPlay
              muted
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="main-carousel__video-wrapper">
            <video
              className="main-carousel__video"
              src={videos.ipad}
              controls={false}
              autoPlay
              muted
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="main-carousel__video-wrapper">
            <video
              className="
              main-carousel__video
              main-carousel__video--smaller
              "
              src={videos.watch}
              controls={false}
              autoPlay
              muted
            />
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};
