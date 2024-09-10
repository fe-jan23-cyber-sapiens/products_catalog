import { useContext, useEffect, useState } from 'react';
import { useUser } from '@descope/react-sdk';
import { Spinner } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_LIGHT } from '../../utils/constants';
import client from '../../api/fetchingOrders';

import './OrdersPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import hands from '../../assets/sticker.webp';
import empty from '../../assets/empty-cart.webp';

import { OrderCard } from '../../components/OrderCard/OrderCard';
import { Back, BreadCrumbs, EmptyModal } from '../../components';
import { Order, ProductWithCount } from '../../utils/typedefs';

export const OrdersPage = () => {
  const { user } = useUser();
  const { theme } = useContext(ThemeContext);

  const isThemeLight = theme === THEME_LIGHT;

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOrders = async () => {
    setIsLoading(true);

    try {
      const ordersfromServer = await client.getUserOrders(user.userId);

      setOrders(ordersfromServer);
    } catch (error) {
      window.console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const products: ProductWithCount[] = orders.map(
    order => order.products,
  ).flat();

  const totalPrice = products.reduce(
    (curr, next) => curr + Number(next.price), 0,
  );

  useEffect(() => {
    getOrders();
  }, [user]);

  return (
    <div className="ordersPage">
      <div className="ordersPage__top">
        <div className="ordersPage__left">
          <BreadCrumbs />

          <h1 className="ordersPage__left--title">
            Orders History
          </h1>

          {user && (
            <p className="ordersPage__userId">
              {`User: ${user.name}`}
            </p>
          )}

          <Back />
        </div>

        <div className="ordersPage__right">
          <h1 className="ordersPage__right--title">
            {`Total: $${totalPrice}`}
          </h1>
        </div>
      </div>

      {isLoading && (
        <div className="productPage__spinner">
          <Spinner variant={isThemeLight
            ? 'dark'
            : 'light'}
          />
        </div>
      )}

      {products.length > 0 && (
        <div className="ordersPage__products">
          {products.map(product => (
            <OrderCard product={product} key={product.phoneId} />
          ))}
        </div>
      )}

      {!products.length && !isLoading && (
        <EmptyModal type="orders history" image={empty} />
      )}

      <div className="ordersPage__image">
        <img src={hands} alt="hands with iphones" />
      </div>
    </div>
  );
};
