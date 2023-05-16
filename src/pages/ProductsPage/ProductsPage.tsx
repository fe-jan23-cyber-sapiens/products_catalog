import { FC, useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Product } from '../../utils/typedefs';
import {
  itemsPerPageOptions,
  pageByDefault,
  sortOptions, THEME_LIGHT,
} from '../../utils/constants';

import './ProductsPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { usePagination } from '../../hooks/usePagination';
import { useProducts } from './useProducts';
import {
  BreadCrumbs,
  CustomDropdown,
  Pagination,
  ProductsCatalog,
} from '../../components';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  title: string,
  endpoint: string,
}

export const ProductsPage: FC<Props> = (props) => {
  const { title, endpoint } = props;
  const { theme } = useContext(ThemeContext);

  const {
    sort,
    count,
    products,
    isError,
    isLoading,
    handleSortBy,
    sortedProducts,
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
    defaultItemsPerPage: count,
    elements: sortedProducts,
  });

  const isThemeLight = theme === THEME_LIGHT;

  return (
    <main className="productsPage">
      <div className="productsPage__top">
        <BreadCrumbs />

        <h1 className="productsPage__title">
          {title}
        </h1>

        <p>{`${products.length} models`}</p>
      </div>

      {isLoading && (
        <div className="spinner">
          <Spinner variant={isThemeLight
            ? 'dark'
            : 'light'}
          />
        </div>
      )}

      {isVisibleProducts && (
        <>
          <div className="productsPage__dropdowns">
            <CustomDropdown
              title="Sort by"
              type="sort"
              options={sortOptions}
              defaultValue={sort}
              handleItemsPerPageChange={handleSortBy}
            />

            <CustomDropdown
              size="small"
              title="Items on page"
              options={itemsPerPageOptions}
              defaultValue={count}
              handleItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>

          <ProductsCatalog products={selectedItems} />

          <div className="productsPage__pagination">
            <Pagination
              total={elements.length}
              perPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
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
