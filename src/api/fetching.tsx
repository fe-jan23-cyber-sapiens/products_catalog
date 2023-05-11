const BASE_URL = 'https://products-catalog-api.onrender.com';

function request<T>(url: string, typeReq?: string): Promise<T> {
  let fullUrl = BASE_URL + url;

  switch (typeReq) {
    case 'byCategory':
      fullUrl = `${BASE_URL}/products?category=${url}`;
      break;
    case 'productDetails':
      fullUrl = `${BASE_URL}/details/${url}`;
      break;
    case 'newProducts':
      fullUrl = `${BASE_URL}/products/new`;
      break;
    case 'discountProducts':
      fullUrl = `${BASE_URL}/products/discount`;
      break;
    case 'recommended':
      fullUrl = `${BASE_URL}/products/recommended`;
      break;
    default:
      break;
  }

  return fetch(fullUrl).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export default {
  getAll: request('/products'),
  getByCategory: (category: string) => request(`/products?category=${category}`, 'byCategory'),
  getProductDetails: (phoneId: string) => request(`/details/${phoneId}`, 'productDetails'),
  getNewProducts: () => request('/products/new', 'newProducts'),
  getDiscountProducts: () => request('/products/discount', 'discountProducts'),
  getRecommendedProducts: () => request('/products/recommended', 'recommended'),
};
