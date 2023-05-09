import './Categories.scss';
import { Category } from '../Category/Category';

import phones from '../../assets/categories/phones.png';
import tablets from '../../assets/categories/tablets.png';
import accessories from '../../assets/categories/accessories.png';

export const Categories = () => {
  return (
    <section className="categories__section">
      <div className="categories__container">
        <h1 className="categories__title">
          Shop by category
        </h1>

        <div className="categories">
          <Category
            products={0}
            title="Mobile Phones"
            image={phones}
            link="/phones"
          />

          <Category
            products={0}
            title="Tablets"
            image={tablets}
            link="/tablets"
          />

          <Category
            products={0}
            title="Accessories"
            image={accessories}
            link="/accessories"
          />
        </div>
      </div>
    </section>
  );
};
