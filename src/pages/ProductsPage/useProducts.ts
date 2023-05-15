import { useEffect, useState } from 'react';
import { Product } from '../../utils/typedefs';
import client from '../../api/fetching';

interface Options {
  endpoint: string
}

export const useProducts = (options: Options) => {
  const { endpoint } = options;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const isVisibleProducts = !isError && !isLoading && products.length > 0;
  const isVisibleModal = products.length <= 0 && !isLoading && !isError;

  const getProducts = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const productsFromServer = await client.getByCategory(endpoint);

      setProducts(productsFromServer);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [endpoint]);

  return {
    products,
    isVisibleModal,
    isVisibleProducts,
    isError,
    isLoading,
  };
};
