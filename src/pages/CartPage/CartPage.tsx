import './CartPage.scss';
import { Back, Card } from '../../components';

export const CartPage = () => {
  return (
    <main className="cartPage">
      <div className="cartPage__top">
        <Back />

        <h1 className="cartPage__title">
          Cart
        </h1>
      </div>

      <Card />
    </main>
  );
};
