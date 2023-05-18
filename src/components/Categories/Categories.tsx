import { FC, memo } from 'react';
import './Categories.scss';
import phones from '../../assets/categories/phones.png';
import tablets from '../../assets/categories/tablets.png';
import accessories from '../../assets/categories/accessories.png';
import { Category } from '../Category';
import { useCategories } from './useCategories';

export const Categories: FC = memo(() => {
  const {
    phonesProducts,
    tabletsProducts,
    accessoriesProducts,
  } = useCategories();

  return (
    <section className="categories">
      <h1 className="categories__title">
        Shop by category
      </h1>

      <div className="categories__items">
        <Category
          products={phonesProducts.length}
          title="Mobile Phones"
          image={phones}
          link="/phones"
        />

        <Category
          products={tabletsProducts.length}
          title="Tablets"
          image={tablets}
          link="/tablets"
        />

        <Category
          products={accessoriesProducts.length}
          title="Accessories"
          image={accessories}
          link="/accessories"
        />
      </div>
    </section>
  );
});
