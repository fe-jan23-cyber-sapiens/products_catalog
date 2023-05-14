import { useState } from 'react';
import './ModulePage.scss';

export function OrderConfirmation() {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const handleClose = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <div className="order-confirmation">
        {showConfirmation && (
          <div className="confirmation-card">
            <button
              className="close-button"
              onClick={handleClose}
              type="button"
            >
              X
            </button>
            <h2>Thank you for your order!</h2>
          </div>
        )}
        <div className="links">
          <a href="/">Home</a>
        </div>
      </div>
    </>
  );
}
