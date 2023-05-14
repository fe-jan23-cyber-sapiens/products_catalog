import { FC, useContext } from 'react';
import './Checkout.scss';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

// interface CheckoutProps {
//
// }

export const Checkout: FC = () => {
  const { cartProducts } = useContext(CartLSUpdateContext);

  const getPrice = () => {
    const currentPrice = cartProducts.map(({ price }) => +price);

    return currentPrice.join();
  };

  const oneItemPrice = getPrice();

  return (
    <div className="checkout">
      <div>
        <h1 className="total">{oneItemPrice}</h1>
        <p className="totalItems">
          {`Total for ${cartProducts.length} items`}
        </p>
      </div>
      <a href="#buy" className="buy">
        Checkout
      </a>
    </div>
  );
};
