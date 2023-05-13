import { FC, useEffect, useState } from 'react';
import { ProductsCatalog } from '../../components/ProductsCatalog';
import { Product } from '../../utils/typedefs';
import client from '../../api/fetching';
import './ProductsPage.scss';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';

interface Props {
  title: string,
  endpoint: string,
}

export const ProductsPage: FC<Props> = (props) => {
  const { title, endpoint } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const [isError, setIsError] = useState(false);

  const getProducts = async () => {
    setIsError(false);

    try {
      const productsFromServer = await client.getByCategory(endpoint);

      setProducts(productsFromServer);
    } catch {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, [endpoint]);

  return (
    <>
      {!isError ? (
        <main className="productsPage">
          <div className="productsPage__top">
            <BreadCrumbs />

            <h1>{title}</h1>

            <p>{`${products.length} models`}</p>
          </div>

          <ProductsCatalog products={products} />
        </main>
      ) : (
        <p>Something went wrong</p>
      )}
    </>
  );
};
