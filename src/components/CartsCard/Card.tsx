import { ProductCart } from '../ProductsCart/ProductsCart';
import { Checkout } from '../CartsCheckout/Checkout';
import './Card.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Product } from '../../utils/typedefs';

export const Card = () => {
  const [inCart] = useLocalStorage<Product[]>('cart', []);

  return (
    <div className="cards-container">
      <div className="cart-container">
        <div className="cards-container">
          {inCart.map(product => (
            <ProductCart product={product} />
          ))}
        </div>
        <Checkout />
      </div>
    </div>
  );
};
