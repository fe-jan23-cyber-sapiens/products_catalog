/* eslint-disable max-len */
import './ProductPage.scss';
import { useEffect, useState } from 'react';
import { Back } from '../../components/Back/Back';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { ProductDetails } from '../../utils/typedefs';
import {
  CardImages,
  ProductActions,
  ProductInfo,
} from '../../components/ProductDetails';

export const ProductPage = () => {
  const [product, setProduct] = useState<ProductDetails | null>(null);

  const getProduct = async () => {
    // eslint-disable-next-line max-len
    const response = await fetch('https://products-catalog-api.onrender.com/details/apple-iphone-7-32gb-gold');

    const details = await response.json();

    setProduct(details);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product && (
        <div className="details">
          <BreadCrumbs />

          <Back />

          <div className="details__title">{product.name}</div>

          <div>
            <div className="details__top">
              <div className="details__images">
                <CardImages images={product.images} />
              </div>

              <ProductActions product={product} key={product.id} />
            </div>

            <ProductInfo product={product} key={product.id} />
          </div>
        </div>
      )}
    </>
  );
};
