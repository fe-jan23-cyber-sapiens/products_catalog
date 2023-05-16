import './OrderConfirmation.scss';
import { Link } from 'react-router-dom';

export function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <div className="order-confirmation__card">
        <h2 className="order-confirmation__title">
          Thank you for your order!
        </h2>

        <Link to="/phones">
          <button
            className="close-button"
            type="button"
          >
            Back to shop
          </button>
        </Link>
      </div>
    </div>
  );
}
