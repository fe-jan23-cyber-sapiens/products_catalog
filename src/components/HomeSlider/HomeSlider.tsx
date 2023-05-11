import Carousel from 'react-bootstrap/Carousel';
import { SliderItem } from '../SliderItem/SliderItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeSlider.scss';

import banner from '../../assets/sliderImages/Banner.png';
import banner2 from '../../assets/sliderImages/Banner2.png';
import banner3 from '../../assets/sliderImages/Banner3.png';

export const HomeSlider = () => {
  return (
    <div className="carousel">
      <Carousel interval={5000}>
        <Carousel.Item>
          <SliderItem image={banner} />
        </Carousel.Item>

        <Carousel.Item>
          <SliderItem image={banner2} />
        </Carousel.Item>

        <Carousel.Item>
          <SliderItem image={banner3} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
