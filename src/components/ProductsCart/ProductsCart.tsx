import { useState, FC, useContext } from 'react';
import classNames from 'classnames';
import cardCover from '../../assets/card.jpg';
import cross from '../../assets/logos/Cross.svg';

import './ProductsCart.scss';
import { Product } from '../../utils/typedefs';
import { BASE_URL } from '../../utils/constants';
import cross from '../../assets/logos/Cross.svg';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

interface Props {
  initialCount?: number,
  product: Product,
}

export const ProductCart: FC<Props> = ({ initialCount = 1, product }) => {
  const { handleModifyCartLS } = useContext(CartLSUpdateContext);
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
            src={cross}
            alt="del"
          />
        </button>

        <img
          src={`${BASE_URL}/${product.image}`}
          alt="Iphone photo"
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
          <h2>{`$${getTotalPrice()}`}</h2>
        </div>
      </div>
    </div>
  );
};
