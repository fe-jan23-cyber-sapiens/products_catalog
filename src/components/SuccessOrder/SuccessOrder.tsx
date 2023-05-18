import { Link } from 'react-router-dom';
import './SuccessOrder.scss';

export const SuccessOrder = () => {
  return (
    <div className="order-success">
      <div className="order-success__card">
        <h2 className="order-success__title">
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
};
