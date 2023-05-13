import { FC } from 'react';
import './Category.scss';
import { Link } from 'react-router-dom';

interface Props {
  products: number;
  title: string;
  image: string;
  link: string;
}

export const Category: FC<Props> = (props) => {
  const {
    products,
    title,
    image,
    link,
  } = props;

  return (
    <Link
      to={link}
      className="category__link"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="category">
        <div className="category__box">
          <img
            src={image}
            alt={title}
            className="category__image"
          />
        </div>

        <h2 className="category__title">
          {title}
        </h2>

        <p className="category__count">
          {`${products} models`}
        </p>
      </div>
    </Link>
  );
};
