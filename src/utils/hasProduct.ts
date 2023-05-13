import { Product } from './typedefs';

export const hasProduct = (products: Product[], id: number) => {
  return products?.some(product => product.id === id);
};
