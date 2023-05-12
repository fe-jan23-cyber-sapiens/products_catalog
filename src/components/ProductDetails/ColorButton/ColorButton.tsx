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

    if (color === 'rosegold') {
      backGround = 'lightpink';
    }

    if (color === 'gold') {
      backGround = '#FCDBC1';
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
