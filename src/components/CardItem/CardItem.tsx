import { FC } from 'react';
import { AddToCart } from '../AddToCartButton/AddToCartButton';
import { AddToFavourites } from '../FavouritesButton/FavouritesButton';
import './CardItem.scss';
import { Product } from '../../utils/typedefs';
import { BASE_URL } from '../../utils/constants';

type Props = {
  product: Product,
  isAddedToCart: boolean,
  isAddedToFavourites: boolean,
};

export const CardItem: FC<Props> = ({
  product,
  isAddedToCart,
  isAddedToFavourites,
}) => {
  const {
    name,
    image,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    year,
  } = product;

  return (
    <>
      <article
        className="product"
      >
        <img
          src={`${BASE_URL}/${image}`}
          alt="Product"
          className="product__img"
        />
        <div className="product__info">
          <h3 className="product__title">
            {`${name} ${year} ${screen}`}
          </h3>

          <div className="product__price">
            <p className="product__price-item">
              {price}
            </p>

            <p className="product__price-item product__price-item--crossed">
              {fullPrice}
            </p>
          </div>

          <div className="product__specs">
            <div className="product__specs-item">
              <p className="product__specs-title">Screen</p>
              <p className="product__specs-value">{screen}</p>
            </div>
            <div className="product__specs-item">
              <p className="product__specs-title">Capacity</p>
              <p className="product__specs-value">{capacity}</p>
            </div>
            <div className="product__specs-item">
              <p className="product__specs-title">RAM</p>
              <p className="product__specs-value">{ram}</p>
            </div>
          </div>
          <div className="product-item__buttons">
            <AddToCart
              height="40px"
              isAddedToCart={isAddedToCart}
            />
            <AddToFavourites isAddedToFavourites={isAddedToFavourites} />
          </div>
        </div>
      </article>
    </>
  );
};
