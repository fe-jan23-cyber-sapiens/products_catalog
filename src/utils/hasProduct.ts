import { Product } from './typedefs';

export const hasProduct = (products: Product[], id: string) => {
  return products?.some(product => product.phoneId === id);
};
