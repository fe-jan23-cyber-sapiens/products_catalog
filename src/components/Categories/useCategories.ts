import { useEffect, useState } from 'react';
import { Product } from '../../utils/typedefs';
import client from '../../api/fetching';

export const useCategories = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const productsFromServer = await client.getAll();

    setProducts(productsFromServer);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const phonesProducts = products.filter(
    ({ category }) => category === 'phones',
  );

  const tabletsProducts = products.filter(
    ({ category }) => category === 'tablets',
  );

  const accessoriesProducts = products.filter(
    ({ category }) => category === 'accessories',
  );

  return {
    phonesProducts,
    tabletsProducts,
    accessoriesProducts,
  };
};
