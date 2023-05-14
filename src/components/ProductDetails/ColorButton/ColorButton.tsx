import { FC, useCallback } from 'react';
import './ColorButton.scss';
import classNames from 'classnames';

interface Props {
  color: string,
  productColor: string,
  onClick: (color: string) => void
}

export const ColorButton: FC<Props> = (props) => {
  const {
    color,
    onClick,
    productColor,
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
    <button
      className={classNames('color__button', {
        'color__button--active': color === productColor,
      })}
      type="button"
      aria-label="color"
      style={{
        backgroundColor: getColor(),
      }}
      onClick={() => onClick(color)}
    />
  );
};
