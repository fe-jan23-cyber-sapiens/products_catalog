import './ProductPage.scss';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Back } from '../../components/Back/Back';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import {
  CardImages,
  ProductActions,
  ProductInfo,
} from '../../components/ProductDetails';
import { SecondarySlider } from '../../components/SecondarySlider';
import { useProductPage } from './useProductPage';

export const ProductPage = () => {
  const { phoneId = '' } = useParams();

  const {
    product,
    isError,
    isLoading,
  } = useProductPage({ phoneId });

  return (
    <main className="productPage">
      {isLoading && (
        <div className="productPage__spinner">
          <Spinner variant="dark" />
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
