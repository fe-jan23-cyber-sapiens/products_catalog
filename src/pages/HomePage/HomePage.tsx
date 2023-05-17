import './HomePage.scss';
import { Categories, HomeSlider } from '../../components';

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to nice gadgets store!
      </h1>

      <HomeSlider />



      <Categories />

    </div>
  );
};
