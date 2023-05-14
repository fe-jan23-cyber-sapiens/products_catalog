import { useContext } from 'react';
import { FavLSUpdateContext } from '../../context/FavLSUpdateContext';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { ProductsCatalog } from '../../components/ProductsCatalog';
import './FavouritesPage.scss';

export const FavouritesPage = () => {
  const { favProducts } = useContext(FavLSUpdateContext);

  return (
    <main className="favouritesPage">
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
