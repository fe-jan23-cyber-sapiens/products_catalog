import React from 'react';
import classnames from 'classnames';
import './AddToCartButton.scss';

interface Props {
  height: string,
  isAddedToCart: boolean,
}

export const AddToCart: React.FC<Props> = ({ height, isAddedToCart }) => {
  return (
    <button
      className={classnames(
        'add-to-cart-btn',
        {
          'add-to-cart-btn--is-selected': isAddedToCart,
        },
      )}
      style={{ height, width: '100%' }}
      type="button"
    >
      Add to cart
    </button>
  );
};
