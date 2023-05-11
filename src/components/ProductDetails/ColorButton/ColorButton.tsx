import { FC } from 'react';
import './ColorButton.scss';

interface Props {
  color: string,
}

export const ColorButton: FC<Props> = ({ color }) => {
  return (
    <button
      className="color__button"
      type="button"
      aria-label="color"
      style={{ backgroundColor: color }}
    />
  );
};
