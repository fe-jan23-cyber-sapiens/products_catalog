import {
  FC,
  memo,
  useContext,
  useEffect,
  useState,
} from 'react';
import classnames from 'classnames';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

import { Product } from '../../utils/typedefs';
import { hasProduct } from '../../utils/hasProduct';

import './AddToCartButton.scss';

interface Props {
  height: string,
  product: Product,
}

export const AddToCart: FC<Props> = memo((props) => {
  const {
    height,
    product,
  } = props;

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
      onClick={() => handleModifyCartLS(product, 'toggle')}
    >
      {!isInCart
        ? (
          'Add to cart'
        )
        : 'Remove from cart'}
    </button>
  );
});
