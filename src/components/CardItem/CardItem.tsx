import './CardItem.scss';
import { AddToCart } from '../AddToCartButton/AddToCartButton';
import { AddToFavourites } from '../FavouritesButton/FavouritesButton';
import card from '../../assets/card.jpg';

export const CardItem = () => {
  return (
    <>
      <article className="product">
        <img
          src={card}
          alt="Product"
          className="product__img"
        />
        <div className="product__info">
          <h3 className="product__title">
            Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
          </h3>

          <div className="product__price">
            <p className="product__price-item">
              799
            </p>

            <p className="product__price-item--crossed">
              $899
            </p>
          </div>

          <div className="product__specs">
            <div className="product__specs-item">
              <p className="product__specs-title">Screen</p>
              <p className="product__specs-value">5.8 OLED</p>
            </div>

            <div className="product__specs-item">
              <p className="product__specs-title">Capacity</p>
              <p className="product__specs-value">64GB</p>
            </div>

            <div className="product__specs-item">
              <p className="product__specs-title">RAM</p>
              <p className="product__specs-value">4GB</p>
            </div>
          </div>

          <div className="product-item__buttons">
            <AddToCart
              height="40px"
            />

            <AddToFavourites
              size="40px"
            />
          </div>
        </div>
      </article>
    </>
  );
};
