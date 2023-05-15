import {
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import './Checkout.scss';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';
import { getTotalSum } from '../../utils/getTotalSum';

export const Checkout: FC = () => {
  const [total, setTotal] = useState(0);
  const { cartProducts } = useContext(CartLSUpdateContext);

  useEffect(() => {
    if (cartProducts.length) {
      setTotal(getTotalSum(cartProducts));

      return;
    }

    setTotal(0);
  }, [cartProducts]);

  return (
    <div className="checkout">
      <div>
        <h1 className="total">{`$${total}`}</h1>
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
