/* eslint-disable max-len */
import './ProductPage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Back } from '../../components/Back/Back';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { ProductDetails } from '../../utils/typedefs';
import {
  CardImages,
  ProductActions,
  ProductInfo,
} from '../../components/ProductDetails';
import { SecondarySlider } from '../../components/SecondarySlider';
import client from '../../api/fetching';

export const ProductPage = () => {
  const { phoneId = '' } = useParams();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [sameModels, setSameModels] = useState<ProductDetails[]>([]);

  const getProduct = async () => {
    const productDetails = await client.getProductDetails(phoneId);

    setProduct(productDetails);
  };

  const getSameModels = async () => {
    if (product) {
      const models = await client.getSameModels(product.namespaceId);

      setSameModels(models);
    }
  };

  const getNewColor = (color: string) => {
    const gadget = sameModels.find(model => model.color === color);

    if (gadget) {
      setProduct(gadget);
    }
  };

  const getCapacity = (capacity: string) => {
    const gadget = sameModels.find(model => model.capacity === capacity);

    if (gadget) {
      setProduct(gadget);
    }
  };

  useEffect(() => {
    getProduct();
  }, [phoneId]);

  useEffect(() => {
    getSameModels();
  }, [product]);

  return (
    <main className="productPage">
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

              <ProductActions
                productDetails={product}
                key={product.id}
                onColorSelect={getNewColor}
                onCapacitySelect={getCapacity}
              />
            </div>

            <ProductInfo product={product} key={product.id} />
          </div>
        </div>
      )}

      <div className="productPage__slider">
        <SecondarySlider
          endpoint="recommended"
          title="You may also like"
        />
      </div>
    </main>
  );
};
