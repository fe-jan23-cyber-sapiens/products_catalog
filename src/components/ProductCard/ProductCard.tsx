import { AddToCart } from '../AddToCartButton/AddToCartButton';
import { AddToFavourites } from '../FavouritesButton/FavouritesButton';
import './ProductCard.scss';

export const ProductItem = () => {
    return (
      <div className="product-item">
        <img
          src=""
          alt="Phone"
          className="product-item__image"
        />
  
        <h2 className="product-item__title">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </h2>
  
        <div className="product-item__prices">
          <p className="product-item__price--discount">$799</p>
  
          <p className="product-item__price--original">$899</p>
        </div>
  
        <div className="product-item__details">
          <div className="product-item__detail-titles">
            <p className="product-item__detail-title">
              Screen Size
            </p>
  
            <p className="product-item__detail-title">
              Storage Capacity
            </p>
  
            <p className="product-item__detail-title">
              RAM
            </p>
          </div>
  
          <div className="product-item__detail-values">
            <p className="product-item__detail-value">
              5.8” OLED
            </p>
  
            <p className="product-item__detail-value">
              64 GB
            </p>
  
            <p className="product-item__detail-value">
              4 GB
            </p>
          </div>
        </div>
  
        <div className="product-item__buttons">
          <AddToCart 
            height="40px"/>
  
          <AddToFavourites 
            size="40px"/>
        </div>
      </div>
    );
  };
  