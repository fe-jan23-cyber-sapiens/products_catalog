import React, { useState } from 'react';

import './ProductsCart.scss';

type CounterProps = {
  initialCount?: number;
};

export const Product: React.FC = ({ initialCount = 1 }: CounterProps) => {
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
  const price = 999;

  const getTotalPrice = () => {
    return price * quantity;
  };

  return (
    <div className="cart">
      <div className="icon">
        <img src="../assets/logos/Cross.svg" alt="logo delete" />
      </div>

      <div className="phone-card">
        <img src="https://" alt="Iphone 11 PRO" className="phone-card__image" />
        <p className="phone-card__description">Iphone 11 PRO with 8GB of RAM</p>
      </div>

      <div className="price_container">
        <div className="counter">
          <button type="button" onClick={decrement} disabled={isDisabled}>
            -
          </button>
          <span>{count}</span>
          <button type="button" onClick={increment}>
            +
          </button>
        </div>
        <h2>{`$${getTotalPrice()}`}</h2>
      </div>
    </div>
  );
};
