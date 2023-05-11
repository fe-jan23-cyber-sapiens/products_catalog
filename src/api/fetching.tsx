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
  getAll: request('/products'),
  getByCategory: (category: string) => request(`/products?category=${category}`),
  getProductDetails: (phoneId: string) => request(`/details/${phoneId}`),
  getNewProducts: () => request('/products/new'),
  getDiscountProducts: () => request('/products/discount'),
  getRecommendedProducts: () => request('/products/recommended'),
};
