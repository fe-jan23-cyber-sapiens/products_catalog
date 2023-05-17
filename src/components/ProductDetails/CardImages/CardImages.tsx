import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import './CardImages.scss';
import { Modal } from '../../Modal';
import { useModal } from '../../../hooks/useModal';
import { ProductPageImage } from '../../../pages/ProductPageImage';

interface Props {
  images: string[],
}

export const CardImages: FC<Props> = ({ images }) => {
  const { modal, toggleModal } = useModal();
  const [bigImage, setBigImage] = useState<string>('');
  const IMG_URL = 'https://products-catalog-api.onrender.com/';

  useEffect(() => {
    setBigImage(images[0]);
  }, [images]);

  const openModal = () => {
    toggleModal();
  };

  return (
    <div className="card__images">
      <div className="card__images-list">
        {images.map(image => (
          <button
            key={image}
            type="button"
            className={classNames('card__images-button', {
              'is-active': image === bigImage,
            })}
            onClick={() => setBigImage(image)}
          >
            <img
              className="card__images-icon"
              src={`${IMG_URL}${image}`}
              alt="product"
            />
          </button>
        ))}
      </div>

      <Modal modalMode={modal} closeModal={toggleModal}>
        <ProductPageImage
          path={`${IMG_URL}${bigImage}`}
          alt="product"
          openModal={openModal}
        />
      </Modal>

      <ProductPageImage
        path={`${IMG_URL}${bigImage}`}
        alt="product"
        openModal={openModal}
      />
    </div>
  );
};
