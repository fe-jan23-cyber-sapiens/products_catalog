import { useState } from 'react';
import './ModulePageCart.scss';

export function EmptyCart() {
  const [showCart, setShowCart] = useState(true);

  const handleClose = () => {
    setShowCart(false);
  };

  const handleBackToShop = () => {
    setShowCart(false);
    window.location.href = '/home';
  };

  return (
    <>
      {showCart && (
        <div className="empty-cart">
          <div className="empty-cart-content">
            <button
              type="button"
              className="close-button"
              onClick={handleClose}
            >
              X
            </button>
            <div className="message">
              Oops, your cart is empty
              <span role="img" aria-label="Sad Emoji">😢</span>
            </div>
            <div className="total-price">
              TOTAL PRICE: 0.00$
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
