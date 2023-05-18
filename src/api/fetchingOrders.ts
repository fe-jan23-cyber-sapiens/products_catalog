import { Order } from '../utils/typedefs';
import { BASE_URL } from '../utils/constants';

function request<T>(url: string, method: string, body?: any): Promise<T> {
  const fullUrl = BASE_URL + url;

  window.console.log(fullUrl, method, body);

  return fetch(fullUrl, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export default {
  getAll: () => request<Order[]>('/orders', 'GET'),
  getById: (orderId: number) => request<Order>(`/orders/${orderId}`, 'GET'),
  create: (order: Order) => request<Order>('/orders', 'POST', order),
  remove: (orderId: number) => request<Order>(`/orders/${orderId}`, 'DELETE'),
};
