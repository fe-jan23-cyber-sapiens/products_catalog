import { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeSlider.scss';

export const HomeSlider: FC = () => {
  return (
    <div className="main-carousel">
      <Carousel interval={6000}>

        <Carousel.Item>
          <div className="main-carousel__video-wrapper">
            <video
              className="main-carousel__video"
              src={'https://res.cloudinary.com'
                + '/dhg5wnekh/video/upload/v1684492669/bigMain_gfkjqf.mp4'}
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
              main-carousel__video--bigest
              "
              src={'https://res.cloudinary.com'
                + '/dhg5wnekh/video/upload/v1684492684/mainVideo_gakam6.mp4'}
              controls={false}
              autoPlay
              muted
            />
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
