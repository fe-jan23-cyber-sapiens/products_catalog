import { useContext } from 'react';
import { ProductCart } from '../ProductsCart/ProductsCart';
import { Checkout } from '../CartsCheckout/Checkout';
import './Card.scss';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

export const Card = () => {
  const { cartProducts } = useContext(CartLSUpdateContext);

  return (
    <div className="cards-container">
      <div className="cart-container">
        <div className="cards-container">
          {cartProducts.map(product => (
            <ProductCart product={product} />
          ))}
        </div>
        <Checkout />
      </div>
    </div>
  );
};
