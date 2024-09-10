import { useContext } from 'react';
import { FavLSUpdateContext } from '../../context/FavLSUpdateContext';
import './FavouritesPage.scss';
import favicon from '../../assets/favourites-empty.png';
import { BreadCrumbs, EmptyModal, ProductsCatalog } from '../../components';

export const FavouritesPage = () => {
  const { favProducts } = useContext(FavLSUpdateContext);

  return (
    <main className="favouritesPage">
      <div className="favouritesPage__content">
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
          <EmptyModal type="list" image={favicon} />
        )}
      </div>
    </main>
  );
};
