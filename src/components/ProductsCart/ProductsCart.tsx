import {
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';
import './ProductsCart.scss';
import classNames from 'classnames';
import { Product } from '../../utils/typedefs';
import { BASE_URL } from '../../utils/constants';
import cross from '../../assets/logos/Cross.svg';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

interface Props {
  product: Product,
}

export const ProductCart: FC<Props> = ({ product }) => {
  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { handleModifyCartLS } = useContext(CartLSUpdateContext);

  const increment = () => {
    setCount(prev => prev + 1);
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setQuantity(prev => prev - 1);
  };

  const isDisabled = count === 1;
  const { price } = product;

  const getTotalPrice = useCallback(() => {
    return Number(price) * quantity;
  }, [quantity]);

  return (
    <div className="cart">
      <div className="wrapper">
        <button
          type="button"
          className="cart__deleteButton"
          onClick={() => handleModifyCartLS(product)}
        >
          <img
            className="delete"
            src={cross}
            alt="del"
          />
        </button>

        <img
          src={`${BASE_URL}/${product.image}`}
          alt="Iphone"
          className="phone-card__image"
        />
        <p className="phone-card__description">
          {product.name}
        </p>
      </div>

      <div className="wrapper">
        <div className="price_container">
          <div className="counter">
            <button
              type="button"
              className={classNames('count', {
                'count--disabled': isDisabled,
              })}
              onClick={decrement}
              disabled={isDisabled}
            >
              -
            </button>

            <span>{count}</span>

            <button
              type="button"
              className="count"
              onClick={increment}
            >
              +
            </button>
          </div>

          <div className="cart__price">
            {`$${getTotalPrice()}`}
          </div>
        </div>
      </div>
    </div>
  );
};
