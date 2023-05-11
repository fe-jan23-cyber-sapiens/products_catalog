import { Pagination } from '../components/Pagination';
import { usePagination } from '../components/Pagination/usePagination';
import {
  items,
  itemsByDefault,
  itemsPerPageOptions,
  pageByDefault,
} from '../components/Pagination/constants';
import { CustomDropdown } from '../components/Pagination/common_components';

export const HomePage = () => {
  const {
    currentPage,
    itemsPerPage,
    selectedItems,
    onPageChange,
    elements,
    handleItemsPerPageChange,
  } = usePagination<string>({
    defaultCurrentPage: pageByDefault,
    defaultItemsPerPage: itemsByDefault,
    elements: items,
  });

  return (
    <>
      <h1>Home page</h1>

      <CustomDropdown
        size="small"
        title="Items on page"
        options={itemsPerPageOptions}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />

      <Pagination
        total={elements.length}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      <ul>
        {selectedItems.map(item => (
          <li
            key={item}
            data-cy="item"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
