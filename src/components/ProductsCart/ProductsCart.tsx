import { FC, useState } from 'react';
import classNames from 'classnames';
import cardCover from '../../assets/card.jpg';
import cross from '../../assets/logos/Cross.svg';

import './ProductsCart.scss';

type CounterProps = {
  initialCount?: number;
};

export const Product: FC = ({ initialCount = 1 }: CounterProps) => {
  const [count, setCount] = useState(initialCount);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setCount(prev => prev + 1);
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setQuantity(prev => prev - 1);
  };

  const isDisabled = count < 2;
  const price = 999;

  const getTotalPrice = () => {
    return price * quantity;
  };

  return (
    <div className="cart">
      <div className="wrapper">
        <img
          className="delete"
          src={cross}
          alt="del"
        />

        <img
          src={cardCover}
          alt="Iphone 11 PRO"
          className="phone-card__image"
        />

        <p className="phone-card__descriptio">
          Iphone 11 with 8GB of RAM
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
          <h2>{`$${getTotalPrice()}`}</h2>
        </div>
      </div>
    </div>
  );
};
