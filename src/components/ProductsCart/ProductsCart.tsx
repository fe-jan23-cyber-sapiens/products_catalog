import {
  FC, useContext, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { getCurrentImage } from '../../utils/utils';
import { BASE_URL } from '../../utils/constants';
import cross from '../../assets/logos/cross.svg';
import cross_dark from '../../assets/logos/Cross-dark.svg';
import {
  CartLSUpdateContext,
  ProductWithCount,
} from '../../context/CartLSUpdateContext';
import { ThemeContext } from '../../context/ThemeContext';
import './ProductsCart.scss';

interface Props {
  product: ProductWithCount,
}

export const ProductCart: FC<Props> = ({ product }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [total, setTotal] = useState(0);
  const { handleModifyCartLS } = useContext(CartLSUpdateContext);
  const { theme } = useContext(ThemeContext);
  const {
    count,
    price,
    name,
    phoneId,
    image,
  } = product;

  useEffect(() => {
    if (count === 1) {
      setIsDisabled(true);
      setTotal(Number(price));

      return;
    }

    setIsDisabled(false);
    setTotal(Number(price) * count);
  }, [count]);

  const correctIcon = getCurrentImage(theme, cross, cross_dark);

  const increment = () => {
    handleModifyCartLS(product, 'increment');
  };

  const decrement = () => {
    handleModifyCartLS(product, 'decrement');
  };

  return (
    <div className="cart">
      <div className="wrapper">
        <button
          type="button"
          className="cart__deleteButton"
          onClick={() => handleModifyCartLS(product, 'toggle')}
        >
          <img
            className="delete"
            src={correctIcon}
            alt="del"
          />
        </button>

        <Link to={`/phones/${phoneId}`}>
          <img
            src={`${BASE_URL}/${image}`}
            alt="Iphone"
            className="phone-card__image"
          />
        </Link>

        <p className="phone-card__description">
          {name}
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
              onClick={() => decrement()}
              disabled={isDisabled}
            >
              -
            </button>

            <span>{count}</span>

            <button
              type="button"
              className="count"
              onClick={() => increment()}
            >
              +
            </button>
          </div>

          <div className="cart__price">
            {`$${total}`}
          </div>
        </div>
      </div>
    </div>
  );
};
