import { FC } from 'react';
import './ProductPageImage.scss';

interface Props {
  openModal: () => void,
  path: string,
  alt: string,
}

export const ProductPageImage: FC<Props> = ({ path, alt, openModal }) => {
  return (
    <button
      className="image-wrapper"
      type="button"
      onClick={openModal}
    >
      <img
        className="image-wrapper__image"
        src={path}
        alt={alt}
      />
    </button>
  );
};
