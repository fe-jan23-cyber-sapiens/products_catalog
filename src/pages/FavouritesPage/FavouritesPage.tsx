import { useContext } from 'react';
import { FavLSUpdateContext } from '../../context/FavLSUpdateContext';
import './FavouritesPage.scss';
import { BreadCrumbs, ProductsCatalog } from '../../components';
import { EmptyModalFav } from '../../components/EmptyModalFav';

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

      {favProducts.length ? (
        <ProductsCatalog products={favProducts} />
      ) : (
        <EmptyModalFav />
      )}
    </main>
  );
};
