import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useUser } from '@descope/react-sdk';
import './CheckoutForm.scss';
import Spinner from 'react-bootstrap/Spinner';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';
import { getTotalSum } from '../../utils/getTotalSum';
import { Product } from '../../utils/typedefs';
import client from '../../api/fetchingOrders';
import { SuccessOrder } from '../SuccessOrder';

interface FormInput {
  fullName: string;
  email: string;
  phone: string;
}

export const CheckoutForm = () => {
  const { handleSubmit, register } = useForm<FormInput>();
  const [total, setTotal] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const { cartProducts, handleModifyCartLS } = useContext(CartLSUpdateContext);

  useEffect(() => {
    if (cartProducts?.length) {
      setTotal(getTotalSum(cartProducts));

      return;
    }

    setTotal(0);
  }, [cartProducts]);

  const onSubmit = async (userData: FormInput) => {
    setIsLoading(true);

    try {
      if (!cartProducts.length) {
        return;
      }

      const orders = await client.getAll();
      const maxId = Math.max(...orders.map(ord => ord.orderId));
      const newOrder = {
        ...userData,
        userId: user.userId,
        orderId: maxId + 1,
        products: cartProducts,
      };

      await client.create(newOrder);
      handleModifyCartLS({} as Product, 'delete');

      setHasSuccess(true);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {hasSuccess && (
        <SuccessOrder />
      )}

      {!hasSuccess && !hasError && (
        <div
          onSubmit={handleSubmit(onSubmit)}
          className="checkout-form"
        >
          <h2 className="checkout-form__title">Make your order</h2>

          <form
            method="post"
            className="checkout-form__form-wrapper"
          >
            <label className="checkout-form__label">
              Full name

              <input
                autoComplete="off"
                defaultValue={user?.name}
                placeholder="Enter your name"
                {...register('fullName', {
                  required: true,
                  maxLength: 30,
                })}
                className="checkout-form__input"
              />
            </label>

            <label className="checkout-form__label">
              Email

              <input
                autoComplete="off"
                defaultValue={user?.email}
                placeholder="example@gmail.com"
                type="email"
                {...register('email', {
                  required: true,
                })}
                className="checkout-form__input"
              />
            </label>

            <label className="checkout-form__label">
              Phone number

              <input
                autoComplete="off"
                defaultValue={user?.phone}
                placeholder="Enter you phone number"
                type="tel"
                {...register('phone', {
                  required: true,
                  minLength: 10,
                  maxLength: 16,
                  pattern: /^[+-\d]+$/,
                })}
                className="checkout-form__input"
              />
            </label>

            <Link to="/cart" className="checkout-form__total">
              {`Total order sum is $${total}`}
            </Link>

            <button
              type="submit"
              className="checkout-form__button"
            >
              {isLoading
                ? (
                  <Spinner style={{ maxHeight: '14px', maxWidth: '14px' }} />
                )
                : (
                  'Submit order'
                )}
            </button>
          </form>

          {hasError && (
            <p className="checkout-form__error">
              Error occured when creating order
            </p>
          )}
        </div>
      )}
    </>
  );
};
