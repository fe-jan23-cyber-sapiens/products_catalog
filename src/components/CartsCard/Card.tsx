import { FC, useContext } from 'react';
import { ProductCart } from '../ProductsCart';
import { Checkout } from '../CartsCheckout';
import './Card.scss';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

export const Card: FC = () => {
  const { cartProducts } = useContext(CartLSUpdateContext);

  return (
    <div className="cards-container">
      <div className="cart-container">
        <div className="cards-container">
          {cartProducts.map(product => (
            <ProductCart
              product={product}
              key={product.phoneId}
            />
          ))}
        </div>
        <Checkout />
      </div>
    </div>
  );
};
