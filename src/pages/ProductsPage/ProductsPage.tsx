import { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Product } from '../../utils/typedefs';
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
import { useProducts } from './useProducts';

interface Props {
  title: string,
  endpoint: string,
}

export const ProductsPage: FC<Props> = (props) => {
  const { title, endpoint } = props;

  const {
    products,
    isError,
    isLoading,
    isVisibleModal,
    isVisibleProducts,
  } = useProducts({ endpoint });

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
