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
    elements,
    onPageChange,
    itemsPerPage,
    selectedItems,
    currentPage,
    onSelectChange,
    lastItemIndex,
    firstItemIndex,
  } = usePagination<string>({
    defaultCurrentPage: pageByDefault,
    defaultItemsPerPage: itemsByDefault,
    elements: items,
  });

  return (
    <>
      <h1>Home page</h1>

      <p className="lead" data-cy="info">
        {`Page ${currentPage} (items ${firstItemIndex + 1} - ${lastItemIndex} of ${elements.length})`}
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            value={itemsPerPage}
            onChange={onSelectChange}
          >
            {itemsPerPageOptions.map(itemSize => (
              <option key={itemSize} value={itemSize}>{itemSize}</option>
            ))}
          </select>

          <CustomDropdown
            size="small"
            title="Items on page"
            options={itemsPerPageOptions}
          />
        </div>
      </div>

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
