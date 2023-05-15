import { useEffect, useState } from 'react';
import { ProductDetails } from '../../utils/typedefs';
import client from '../../api/fetching';

interface Options {
  id: string
}

export const useProductPage = (options: Options) => {
  const { id } = options;

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProduct = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const productDetails = await client.getProductDetails(id);

      setProduct(productDetails);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return {
    product,
    isError,
    isLoading,
  };
};
