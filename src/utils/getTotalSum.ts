import { ProductWithCount } from '../context/CartLSUpdateContext';

export const getTotalSum = (products: ProductWithCount[]) => {
  return products.reduce(
    (acc, product) => acc + (product.count * Number(product.price)), 0,
  );
};
