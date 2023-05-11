import { PhoneInfo } from '../utils/interface';

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
  getAll: () => request<PhoneInfo[]>('/products'),
  getByCategory: (category: string) => request<PhoneInfo[]>(`/products?category=${category}`),
  getProductDetails: (phoneId: string) => request<PhoneInfo>(`/details/${phoneId}`),
  getNewProducts: () => request<PhoneInfo[]>('/products/new'),
  getDiscountProducts: () => request<PhoneInfo[]>('/products/discount'),
  getRecommendedProducts: () => request<PhoneInfo[]>('/products/recommended'),
};
