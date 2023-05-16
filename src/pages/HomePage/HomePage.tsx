import './HomePage.scss';
import { Categories, HomeSlider, SecondarySlider } from '../../components';

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to nice gadgets store!
      </h1>

      <HomeSlider />

      <div className="home-page__slider">
        <SecondarySlider
          endpoint="new"
          title="Brand new models"
          rightArrow="new-brands-right-arrow"
          leftArrow="new-brands-left-arrow"
        />
      </div>

      <Categories />

      <div className="home-page__slider">
        <SecondarySlider
          endpoint="discount"
          title="Hot prices"
          rightArrow="discounts-right-arrow"
          leftArrow="discounts-left-arrow"
        />
      </div>
    </div>
  );
};
