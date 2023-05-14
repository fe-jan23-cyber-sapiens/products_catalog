import { useContext } from 'react';
import { FavLSUpdateContext } from '../../context/FavLSUpdateContext';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { ProductsCatalog } from '../../components/ProductsCatalog';

export const FavouritesPage = () => {
  const { favProducts } = useContext(FavLSUpdateContext);

  return (
    <main className="cartPage">
      <div className="productsPage__top">
        <BreadCrumbs />

        <h1 className="productsPage__title">
          Favourites
        </h1>

        <p>{`${favProducts.length} items`}</p>
      </div>

      <ProductsCatalog products={favProducts} />
    </main>
  );
};
