import classNames from 'classnames';
import { FC, useState } from 'react';
import './CardImages.scss';

type Props = {
  images: string[];
};

export const CardImages: FC<Props> = ({ images }) => {
  const [bigImage, setBigImage] = useState<string>(images[0]);
  const IMG_URL = 'https://products-catalog-api.onrender.com/';

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

      <img
        className="card__images-big"
        src={`${IMG_URL}${bigImage}`}
        alt="product"
      />
    </div>
  );
};
