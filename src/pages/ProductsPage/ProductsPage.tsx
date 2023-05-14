import { FC, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { Product } from '../../utils/typedefs';
import client from '../../api/fetching';
import {
  itemsByDefault,
  itemsPerPageOptions,
  pageByDefault,
} from '../../utils/constants';

import './ProductsPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Pagination } from '../../components/Pagination';
import { ProductsCatalog } from '../../components/ProductsCatalog';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { CustomDropdown } from '../../components/CustomDropdown';
import { usePagination } from '../../hooks/usePagination';

interface Props {
  title: string,
  endpoint: string,
}

export const ProductsPage: FC<Props> = (props) => {
  const { title, endpoint } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const isVisibleProducts = !isError && !isLoading && products.length > 0;
  const isVisibleModal = products.length <= 0 && !isLoading && !isError;

  const {
    currentPage,
    itemsPerPage,
    selectedItems,
    onPageChange,
    elements,
    handleItemsPerPageChange,
  } = usePagination<Product>({
    defaultCurrentPage: pageByDefault,
    defaultItemsPerPage: itemsByDefault,
    elements: products,
  });

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

  return (
    <main className="productsPage">
      {isLoading && (
        <Spinner variant="dark" />
      )}

      {isVisibleProducts && (
        <>
          <div className="productPage__container">
            <div className="productsPage__top">
              <BreadCrumbs />

              <h1 className="productsPage__title">
                {title}
              </h1>

              <p>{`${products.length} models`}</p>
            </div>

            <div className="productsPage__dropdowns">
              <CustomDropdown
                size="small"
                title="Items on page"
                options={itemsPerPageOptions}
                handleItemsPerPageChange={handleItemsPerPageChange}
              />
            </div>

            <ProductsCatalog products={selectedItems} />
          </div>

          <Pagination
            total={elements.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </>
      )}

      {isVisibleModal && (
        <div className="productsPage__modal">
          Oops... Unfortunately, these products are not available yet..
        </div>
      )}

      {isError && !isLoading && (
        <div className="productsPage__modal">
          Oops... Try again.
        </div>
      )}
    </main>
  );
};
