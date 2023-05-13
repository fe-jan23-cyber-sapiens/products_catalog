import React, { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

import { Product } from '../../utils/typedefs';
import { hasProduct } from '../../utils/hasProduct';

import './AddToCartButton.scss';

interface Props {
  height: string,
  product: Product,
}

export const AddToCart: React.FC<Props> = ({
  height,
  product,
}) => {
  const { handleModifyCartLS, cartProducts } = useContext(CartLSUpdateContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(hasProduct(cartProducts, product.phoneId));
  }, [cartProducts]);

  return (
    <button
      className={classnames(
        'add-to-cart-btn',
        {
          'add-to-cart-btn--is-selected': isInCart,
        },
      )}
      style={{ height, width: '100%' }}
      type="button"
      onClick={() => handleModifyCartLS(product)}
    >
      {!isInCart
        ? (
          'Add to cart'
        )
        : 'Remove from cart'}
    </button>
  );
};
