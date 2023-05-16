import './ProductPage.scss';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useProductPage } from './useProductPage';
import {
  Back,
  BreadCrumbs,
  CardImages,
  ProductActions,
  ProductInfo,
  SecondarySlider,
} from '../../components';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_LIGHT } from '../../utils/constants';

export const ProductPage = () => {
  const { phoneId = '' } = useParams();
  const { tabletId = '' } = useParams();
  const id = phoneId || tabletId;
  const { theme } = useContext(ThemeContext);

  const {
    product,
    isError,
    isLoading,
  } = useProductPage({ id });

  const isThemeLight = theme === THEME_LIGHT;

  return (
    <main className="productPage">
      {isLoading && (
        <div className="productPage__spinner">
          <Spinner variant={isThemeLight
            ? 'dark'
            : 'light'}
          />
        </div>
      )}

      {!isError && !isLoading && product && (
        <>
          <div className="details">
            <BreadCrumbs />

            <Back />

            <div className="details__title">
              {product.name}
            </div>

            <div>
              <div className="details__top">
                <div className="details__images">
                  <CardImages images={product.images} />
                </div>

                <ProductActions productDetails={product} />
              </div>

              <ProductInfo product={product} />
            </div>
          </div>

          <div className="productPage__slider">
            <SecondarySlider
              endpoint="recommended"
              title="You may also like"
              rightArrow="reccomended-right-arrow"
              leftArrow="reccomended-left-arrow"
            />
          </div>
        </>
      )}

      {isError && !isLoading && (
        <div className="productsPage__modal">
          Oops... Try again.
        </div>
      )}
    </main>
  );
};
