import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { AddToCart } from '../AddToCartButton';
import { AddToFavourites } from '../FavouritesButton';

import './CardItem.scss';

import { Product } from '../../utils/typedefs';
import { BASE_URL } from '../../utils/constants';

interface Props {
  product: Product,
}

export const CardItem: FC<Props> = memo(({ product }) => {
  const {
    name,
    image,
    price,
    fullPrice,
    phoneId,
    screen,
    capacity,
    ram,
    year,
  } = product;

  return (
    <article
      className="product"
    >
      <Link
        to={`/${product.category}/${phoneId}`}
        className="link-to-product"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={`${BASE_URL}/${image}`}
          alt="Product"
          className="product__img"
        />
      </Link>

      <div className="product__info">
        <h3 className="product__title">
          {`${name} ${year}`}
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
            product={product}
          />

          <AddToFavourites
            product={product}
          />
        </div>
      </div>
    </article>
  );
});
