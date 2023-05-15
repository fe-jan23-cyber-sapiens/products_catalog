import { FC } from 'react';
import { Product } from '../../utils/typedefs';
import './ProductsCatalog.scss';
import { CardItem } from '../CardItem';

interface Props {
  products: Product[]
}

export const ProductsCatalog: FC<Props> = (props) => {
  const { products } = props;

  return (
    <div className="productsCatalog">
      {products.map(product => (
        <CardItem
          product={product}
          key={product.phoneId}
        />
      ))}
    </div>
  );
};
