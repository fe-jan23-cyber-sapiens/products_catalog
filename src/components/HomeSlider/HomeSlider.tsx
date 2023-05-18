import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeSlider.scss';
import { FC } from 'react';
import * as videos from '../../assets';

export const HomeSlider: FC = () => {
  return (
    <div className="main-carousel">
      <Carousel interval={6000}>

        <Carousel.Item>
          <div className="main-carousel__video-wrapper">
            <video
              className="main-carousel__video"
              controls={false}
              autoPlay
              muted
            >
              <source src={videos.bigMain} type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="main-carousel__video-wrapper">
            <video
              className="
              main-carousel__video
              main-carousel__video--bigest
              "
              controls={false}
              autoPlay
              muted
              loop
            >
              <source src={videos.mainVideo} type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="main-carousel__image-wrapper--black">
            <div
              className="
              main-carousel__image
              main-carousel__image--second
            "
            />
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};
