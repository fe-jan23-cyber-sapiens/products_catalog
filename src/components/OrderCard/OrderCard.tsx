import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductWithCount } from '../../utils/typedefs';
import { BASE_URL } from '../../utils/constants';
import './OrderCard.scss';

interface Props {
  product: ProductWithCount,
}

export const OrderCard: FC<Props> = ({ product }) => {
  const {
    phoneId,
    category,
    image,
    name,
    price,
  } = product;

  return (
    <Link
      to={`/${category}/${phoneId}`}
      className="product__link"
    >
      <div className="product__card">
        <img
          src={`${BASE_URL}/${image}`}
          className="product__image"
          alt="iphone"
        />

        <div className="product__description">
          <h2 className="product__title">{name}</h2>

          <p className="product__price">{`$${price}`}</p>
        </div>
      </div>
    </Link>
  );
};
