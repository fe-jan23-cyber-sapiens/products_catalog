import { Product, ProductDetails } from '../utils/typedefs';
import { BASE_URL } from '../utils/constants';

function request<T>(url: string): Promise<T> {
  const fullUrl = BASE_URL + url;

  return fetch(fullUrl).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export default {
  getAll: () => request<Product[]>('/products'),
  getByCategory: (category: string) => request<Product[]>(`/products?category=${category}`),
  getProductDetails: (phoneId: string) => request<ProductDetails>(`/details/${phoneId}`),
  getSameModels: (nameId: string) => request<ProductDetails[]>(`/details?namespaceId=${nameId}`),
  getNewProducts: () => request<Product[]>('/products/new'),
  getDiscountProducts: () => request<Product[]>('/products/discount'),
  getRecommendedProducts: () => request<Product[]>('/products/recommended'),
};
