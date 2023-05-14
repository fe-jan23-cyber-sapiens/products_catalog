import { FC } from 'react';
import classNames from 'classnames';
import './CapacityButton.scss';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../../../utils/typedefs';

interface Props {
  capacity: string;
  product: ProductDetails;
}

export const CapacityButton: FC<Props> = (props) => {
  const {
    capacity,
    product,
  } = props;

  return (
    <Link
      to={`/phones/${product.namespaceId}-${capacity.toLowerCase()}-${product.color}`}
    >
      <button
        key={capacity}
        type="button"
        className={classNames('capacity__button', {
          'capacity__button--active': capacity === product.capacity,
        })}
      >
        {capacity}
      </button>
    </Link>
  );
};
