import { useState } from 'react';
import './ModulePageFavourites.scss';

export function EmptyFavoritesPage() {
  const [showFavourites, setShowFavourites] = useState(true);

  const handleClose = () => {
    setShowFavourites(false);
  };

  const handleBackToShop = () => {
    setShowFavourites(false);
    window.location.href = '/home';
  };

  return (
    <>
      {showFavourites && (
        <div className="empty-favorites">
          <div className="empty-favorites-content">
            <button
              type="button"
              className="close-button"
              onClick={handleClose}
            >
              X
            </button>
            <div className="image-container">
              <img
                src="src/assets/logos/favourites-empty.png"
                alt="Empty Favorites"
              />
            </div>
            <div className="message">
              Oops! Your favorites are empty.
              <span role="img" aria-label="Sad Emoji">😢</span>
              Please add some items to your favorites.
            </div>
            <button
              type="button"
              className="back-to-shop-button"
              onClick={handleBackToShop}
            >
              Back to Shop
            </button>
          </div>
        </div>
      )}
    </>
  );
}
