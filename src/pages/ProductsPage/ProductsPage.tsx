import { FC, useEffect, useState } from 'react';
import { ProductsCatalog } from '../../components/ProductsCatalog';
import { Product } from '../../utils/typedefs';
import client from '../../api/fetching';
import './ProductsPage.scss';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { CustomDropdown } from '../../components/CustomDropdown';
import {
  itemsByDefault,
  itemsPerPageOptions,
  pageByDefault,
} from '../../utils/constants';
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../../components/Pagination';

interface Props {
  title: string,
  endpoint: string,
}

export const ProductsPage: FC<Props> = (props) => {
  const { title, endpoint } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const [isError, setIsError] = useState(false);

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

          <Pagination
            total={elements.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </main>
      ) : (
        <p className="productsPage__error">
          Something went wrong
        </p>
      )}
    </>
  );
};
