import { FC, useCallback } from 'react';
import './ColorButton.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Product, ProductDetails } from '../../../utils/typedefs';

interface Props {
  color: string,
  productDetails: ProductDetails,
  product: Product,
}

export const ColorButton: FC<Props> = (props) => {
  const {
    color,
    product,
    productDetails,
  } = props;

  const {
    namespaceId,
    capacity,
  } = productDetails;

  const link = `/${product.category}/${namespaceId}-${capacity.toLowerCase()}-${color}`;

  const getColor = useCallback(() => {
    let backGround = color;

    switch (color) {
      case 'rosegold':
        backGround = 'lightpink';
        break;

      case 'gold':
        backGround = '#FCDBC1';
        break;

      case 'spacegray':
        backGround = '#4C4C4C';
        break;

      case 'midnightgreen':
        backGround = '#5F7170';
        break;

      default:
        return color;
    }

    return backGround;
  }, [color]);

  return (
    <Link
      to={link}
    >
      <button
        className={classNames('color__button', {
          'color__button--active': color === productDetails.color,
        })}
        type="button"
        aria-label="color"
        style={{
          backgroundColor: getColor(),
        }}
      />
    </Link>
  );
};
