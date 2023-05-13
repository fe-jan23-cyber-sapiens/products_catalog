import { FC, useContext, useState } from 'react';
import classNames from 'classnames';
import { Product } from '../../utils/typedefs';
import { BASE_URL } from '../../utils/constants';
import cross from '../../assets/logos/Cross.svg';
import cross_dark from '../../assets/logos/Cross-dark.svg';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

import './ProductsCart.scss';
import { ThemeContext } from '../../context/ThemeContext';
import { getCurrentImage } from '../../utils/utils';

interface Props {
  initialCount?: number,
  product: Product,
}

export const ProductCart: FC<Props> = ({ initialCount = 1, product }) => {
  const [count, setCount] = useState(initialCount);
  const [quantity, setQuantity] = useState(1);
  const { handleModifyCartLS } = useContext(CartLSUpdateContext);
  const { theme } = useContext(ThemeContext);

  const correctIcon = getCurrentImage(theme, cross, cross_dark);

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

  const getTotalPrice = () => {
    return Number(price) * quantity;
  };

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
            src={correctIcon}
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
              className={classNames('count-left',
                { 'count-left--disabled': isDisabled })}
              onClick={decrement}
              disabled={isDisabled}
            >
              -
            </button>
            <span>{count}</span>
            <button
              type="button"
              className={classNames('count-right',
                { 'count-right--disabled': isDisabled })}
              onClick={increment}
            >
              +
            </button>
          </div>
          <h2 className="price_container__title">{`$${getTotalPrice()}`}</h2>
        </div>
      </div>
    </div>
  );
};
