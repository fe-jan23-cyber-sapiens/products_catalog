import { Link } from 'react-router-dom';
import './EmptyModalFav.scss';
import favicon from '../../assets/favourites-empty.png';

export const EmptyModalFav = () => {
  return (
    <div className="empty-favorites">
      <div className="empty-favorites__content">
        <div className="image-container">
          <img
            src={favicon}
            alt="Empty Favorites"
          />
        </div>

        <div className="message">
          Oops! Your favorites are empty.
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
