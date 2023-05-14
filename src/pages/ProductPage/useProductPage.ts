import { useEffect, useState } from 'react';
import { ProductDetails } from '../../utils/typedefs';
import client from '../../api/fetching';

interface Options {
  phoneId: string
}

export const useProductPage = (options: Options) => {
  const { phoneId } = options;

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProduct = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const productDetails = await client.getProductDetails(phoneId);

      setProduct(productDetails);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [phoneId]);

  return {
    product,
    isError,
    isLoading,
  };
};
