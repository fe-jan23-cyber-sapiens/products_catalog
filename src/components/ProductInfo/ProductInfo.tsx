import { FC } from 'react';
import './ProductInfo.scss';
import { ProductDetails } from '../../typedefs';
import { AboutProduct } from '../AboutProduct/AboutProduct';
import { TechSpecs } from '../TechSpecs/TechSpecs';

interface Props {
  product: ProductDetails
}

export const ProductInfo: FC<Props> = (props) => {
  const { product } = props;
  const {
    id,
    description,
  } = product;

  return (
    <div className="productInfo">
      <div className="productInfo__description">
        <h2 className="productInfo__subtitle">
          About
        </h2>

        <div className="productInfo__info">
          {description.map(point => (
            <AboutProduct
              point={point}
              key={point.title}
            />
          ))}
        </div>
      </div>

      <div className="productInfo__tech-specs">
        <h2 className="productInfo__subtitle ">
          Tech specs
        </h2>

        <div className="productInfo__characteristic">
          <TechSpecs
            product={product}
            key={id}
          />
        </div>
      </div>
    </div>
  );
};
