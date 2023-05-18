import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../../utils/typedefs';
import client from '../../api/fetching';
import { findProducts, getSortedBy } from '../../utils/helper';

interface Options {
  endpoint: string
}

export const useProducts = (options: Options) => {
  const { endpoint } = options;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const sort = searchParams.get('sort') || 'newest';
  const count = searchParams.get('items') || '16';
  const [sortBy, setSortBy] = useState(sort);

  const handleSortBy = (option: string) => {
    setSortBy(option.toLowerCase());
  };

  const sortedProducts: Product[] = useMemo(() => (
    getSortedBy(products, sortBy)
  ), [products, sortBy]);

  const isVisibleProducts = !isError && !isLoading && products.length > 0;

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

  const visibleProducts = findProducts(sortedProducts, query);

  return {
    count,
    sort,
    query,
    setQuery,
    products,
    isVisibleProducts,
    visibleProducts,
    handleSortBy,
    isError,
    isLoading,
  };
};
