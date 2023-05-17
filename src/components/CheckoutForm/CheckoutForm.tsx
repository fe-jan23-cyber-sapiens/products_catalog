import { useContext, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useUser } from '@descope/react-sdk';
import './CheckoutForm.scss';
import { CartLSUpdateContext } from '../../context/CartLSUpdateContext';
import { getTotalSum } from '../../utils/getTotalSum';
import { Product } from '../../utils/typedefs';

interface FormInput {
  fullName: string;
  email: string;
  phone: number;
}

export const CheckoutForm = () => {
  const { handleSubmit, register } = useForm<FormInput>();
  const [, setData] = useState<FormInput | null>(null);
  const [total, setTotal] = useState(0);
  const { user } = useUser();
  const { cartProducts, handleModifyCartLS } = useContext(CartLSUpdateContext);

  useEffect(() => {
    if (cartProducts?.length) {
      setTotal(getTotalSum(cartProducts));

      return;
    }

    setTotal(0);
  }, [cartProducts]);

  const onSubmit = (userData: FormInput) => {
    setData(userData);
    handleModifyCartLS({} as Product, 'delete');
  };

  return (
    <>
      <div className="modal">
        Order succes
      </div>
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
            Submit order
          </button>
        </form>
      </div>
    </>
  );
};
