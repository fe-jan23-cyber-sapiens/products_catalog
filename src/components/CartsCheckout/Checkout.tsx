import { FC, useContext } from 'react';
import './Checkout.scss';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

export const Checkout: FC = () => {
  const { cartProducts } = useContext(CartLSUpdateContext);

  return (
    <div className="checkout">
      <div>
        <h1 className="total">$4000</h1>
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
