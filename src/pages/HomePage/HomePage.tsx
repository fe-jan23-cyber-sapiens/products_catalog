import { Categories } from '../../components/Categories/Categories';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';
import { SecondarySlider } from '../../components/SecondarySlider';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <main className="homePage">
      <HomeSlider />

      <div className="homePage__slider">
        <SecondarySlider
          endpoint="new"
          title="Brand new models"
        />
      </div>

      <Categories />

      <div className="homePage__slider">
        <SecondarySlider
          endpoint="discount"
          title="Hot prices"
        />
      </div>
    </main>
  );
};
