import { FC, useEffect, useState } from 'react';
import { Product, ProductDetails } from '../../../utils/typedefs';
import client from '../../../api/fetching';
import { ColorButton } from '../ColorButton/ColorButton';
import { CapacityButton } from '../CapacityButton/CapacityButton';
import { TechSpecsItem } from '../TechSpecsItem/TechSpecsItem';
import './ProductActions.scss';
import { AddToCart } from '../../AddToCartButton';
import { AddToFavourites } from '../../FavouritesButton';

interface Props {
  productDetails: ProductDetails,
}

export const ProductActions: FC<Props> = (props) => {
  const { productDetails } = props;

  const {
    id,
    ram,
    screen,
    resolution,
    processor,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    capacityAvailable,
  } = productDetails;

  const [product, setProduct] = useState<Product>();

  const getProduct = async () => {
    const productFromServer = await client.getOne(id);

    setProduct(productFromServer);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="actions">
      <div className="actions__select">
        <p className="actions__small">
          Available colors
        </p>

        <div className="actions__buttons">
          {colorsAvailable.map((color) => (
            <ColorButton
              product={productDetails}
              color={color}
              key={color}
            />
          ))}
        </div>
      </div>

      <div className="actions__select">
        <p className="actions__small">
          Select capacity
        </p>

        <div className="actions__buttons">
          {capacityAvailable.map((capacity) => (
            <CapacityButton
              capacity={capacity}
              product={productDetails}
              key={capacity}
            />
          ))}
        </div>
      </div>

      <div className="actions__prices">
        <span className="actions__discount">
          {`$${priceDiscount}`}
        </span>

        <span className="actions__full">
          {`$${priceRegular}`}
        </span>
      </div>

      {product && (
        <div className="actions__button">
          <AddToCart product={product} height="45px" />

          <AddToFavourites product={product} />
        </div>
      )}

      <div className="actions__characteristic">
        <TechSpecsItem title="Screen" option={screen} />

        <TechSpecsItem title="Resolution" option={resolution} />

        <TechSpecsItem title="Processor" option={processor} />

        <TechSpecsItem title="RAM" option={ram} />
      </div>
    </div>
  );
};
