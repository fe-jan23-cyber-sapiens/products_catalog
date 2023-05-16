import {
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/order" className="buy">
        Checkout
      </Link>
    </div>
  );
};
