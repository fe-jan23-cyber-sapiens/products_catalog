import { useContext } from 'react';
import { ProductCart } from '../ProductsCart/ProductsCart';
import { Checkout } from '../CartsCheckout/Checkout';
import './Card.scss';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

export const Card = () => {
  const { cartProducts } = useContext(CartLSUpdateContext);

  // const [quantity, setQuantity] = useState(1);
  //
  // const getTotalPrice = useCallback(() => {
  //   return Number(price) * quantity;
  // }, [quantity]);

  return (
    <div className="cards-container">
      <div className="cart-container">
        <div className="cards-container">
          {cartProducts.map(product => (
            <ProductCart
              product={product}
              key={product.phoneId}
            />
          ))}
        </div>
        <Checkout />
      </div>
    </div>
  );
};
