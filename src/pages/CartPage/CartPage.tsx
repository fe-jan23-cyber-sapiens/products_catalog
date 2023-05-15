import { Back } from '../../components/Back/Back';
import { Card } from '../../components/CartsCard/Card';
import './CartPage.scss';

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
