import { FC } from 'react';
import './Categories.scss';
import phones from '../../assets/categories/phones.png';
import tablets from '../../assets/categories/tablets.png';
import accessories from '../../assets/categories/accessories.png';
import { Category } from '../Category';

export const Categories: FC = () => {
  return (
    <section className="categories">
      <h1 className="categories__title">
        Shop by category
      </h1>

      <div className="categories__items">
        <Category
          products={71}
          title="Mobile Phones"
          image={phones}
          link="/phones"
        />

        <Category
          products={18}
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
    </section>
  );
};
