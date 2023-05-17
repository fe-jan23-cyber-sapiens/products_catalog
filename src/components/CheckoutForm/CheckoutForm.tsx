import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import './CheckoutForm.scss';

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: number;
}

export const CheckoutForm = () => {
  const { handleSubmit, register } = useForm<FormInput>();
  const [data, setData] = useState<FormInput | null>(null);

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <div
      onSubmit={handleSubmit((userData) => setData(userData))}
      className="form"
    >
      <h2 className="form__title">Make your order</h2>

      <form
        method="post"
        className="form__form-wrapper"
      >
        <label>
          First name:

          <input
            placeholder="Enter your name"
            {...register('firstName', {
              required: true,
              maxLength: 20,
              pattern: /[A-Za-z]/i,
            })}
          />
        </label>

        <label>
          Last name:

          <input
            placeholder="Enter your surname"
            {...register('lastName', {
              required: true,
              maxLength: 20,
              pattern: /[A-Za-z]/i,
            })}
          />
        </label>

        <label>
          Email:

          <input
            placeholder="example@gmail.com"
            type="email"
            {...register('email', {
              required: true,
            })}
          />
        </label>

        <label>
          City:

          <input
            placeholder="Enter city for delivery"
            {...register('city', {
              required: true,
              pattern: /[A-Za-z]/i,
            })}
          />
        </label>

        <label>
          Phone number:

          <input
            placeholder="Enter you phone number"
            type="tel"
            {...register('phone', {
              required: true,
              minLength: 10,
              maxLength: 13,
            })}
          />
        </label>

        <button type="submit">Submit order</button>
      </form>
    </div>
  );
};
