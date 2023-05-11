import { Product, ProductDetails } from '../utils/typedefs';

const BASE_URL = 'https://products-catalog-api.onrender.com';

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
  getNewProducts: () => request<Product[]>('/products/new'),
  getDiscountProducts: () => request<Product[]>('/products/discount'),
  getRecommendedProducts: () => request<Product[]>('/products/recommended'),
};
