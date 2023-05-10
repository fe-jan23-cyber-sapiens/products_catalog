import { Product } from '../productsCart/productsCart';
import { Checkout } from '../cartsCheckout/checkout';
// import '../../App.scss';

export const Card = () => (
  <div className="cart-container">
    <div className="cards-container">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
    <Checkout />
  </div>
);
