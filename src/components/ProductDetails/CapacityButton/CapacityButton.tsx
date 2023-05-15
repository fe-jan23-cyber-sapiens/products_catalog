import { FC } from 'react';
import classNames from 'classnames';
import './CapacityButton.scss';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../../../utils/typedefs';

interface Props {
  capacity: string,
  category: string,
  product: ProductDetails,
}

export const CapacityButton: FC<Props> = (props) => {
  const {
    capacity,
    category,
    product,
  } = props;

  return (
    <Link
      to={`/${category}/${product.namespaceId}-${capacity.toLowerCase()}-${product.color}`}
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
