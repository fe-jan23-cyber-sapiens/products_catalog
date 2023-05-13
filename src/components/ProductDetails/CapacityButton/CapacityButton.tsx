import { FC } from 'react';
import classNames from 'classnames';
import './CapacityButton.scss';
import { ProductDetails } from '../../../utils/typedefs';

interface Props {
  capacity: string;
  product: ProductDetails;
  onClick: (capacity: string) => void,
}

export const CapacityButton: FC<Props> = (props) => {
  const {
    capacity,
    product,
    onClick,
  } = props;

  return (
    <button
      key={capacity}
      type="button"
      onClick={() => onClick(capacity)}
      className={classNames('capacity__button', {
        'capacity__button--active': capacity === product.capacity,
      })}
    >
      {capacity}
    </button>
  );
};
