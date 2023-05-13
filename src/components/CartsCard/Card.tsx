import { Product } from '../ProductsCart/ProductsCart';
import { Checkout } from '../CartsCheckout/Checkout';
import './Card.scss';

export const Card = () => (
  <div className="cards-container">
    <div className="cart-container">
      <div className="cards-container">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Checkout />
    </div>
  </div>
);
