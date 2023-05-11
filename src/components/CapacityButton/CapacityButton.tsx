import { FC } from 'react';
import classNames from 'classnames';
import './CapacityButton.scss';
import { ProductDetails } from '../../typedefs';

interface Props {
  capacity: string,
  product: ProductDetails,
}

export const CapacityButton: FC<Props> = ({ capacity, product }) => {
  return (
    <button
      key={capacity}
      type="button"
      className={classNames('capacity__button', {
        'capacity__button--active': capacity === product.capacity,
      })}
    >
      {capacity}
    </button>
  );
};
