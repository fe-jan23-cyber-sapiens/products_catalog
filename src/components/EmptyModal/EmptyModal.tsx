import { FC } from 'react';
import { Link } from 'react-router-dom';
import './EmptyModal.scss';

interface Props {
  type: string,
  image: string,
}

export const EmptyModal: FC<Props> = (props) => {
  const {
    type,
    image,
  } = props;

  return (
    <div className="empty-modal">
      <div className="empty-modal__content">
        <div className="image-container">
          <img
            src={image}
            alt="Empty Favorites"
          />
        </div>

        <div className="message">
          {`Oops! Your ${type} is empty.`}
          <span role="img" aria-label="Sad Emoji">😢</span>
        </div>

        <Link to="/phones">
          <button
            type="button"
            className="back-to-shop-button"
          >
            Back to Shop
          </button>
        </Link>
      </div>
    </div>
  );
};
