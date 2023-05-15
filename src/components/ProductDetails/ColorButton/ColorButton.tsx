import { FC, useCallback } from 'react';
import './ColorButton.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../../../utils/typedefs';

interface Props {
  color: string,
  product: ProductDetails,
}

export const ColorButton: FC<Props> = (props) => {
  const {
    color,
    product,
  } = props;

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
      to={`/phones/${product.namespaceId}-${product.capacity.toLowerCase()}-${color}`}
    >
      <button
        className={classNames('color__button', {
          'color__button--active': color === product.color,
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
