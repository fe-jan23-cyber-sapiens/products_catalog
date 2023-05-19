import { useContext } from 'react';
import './CartPage.scss';
import favicon from '../../assets/empty-cart.webp';
import { Back, Card, EmptyModal } from '../../components';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';

export const CartPage = () => {
  const { cartProducts } = useContext(CartLSUpdateContext);

  return (
    <main className="cartPage">
      <div className="cartPage__top">
        <Back />

        <h1 className="cartPage__title">
          Cart
        </h1>
      </div>

      {cartProducts.length ? (
        <Card />
      ) : (
        <EmptyModal type="cart" image={favicon} />
      )}
    </main>
  );
};
