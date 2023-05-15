import { useState } from 'react';

interface UsePaginationProps<T> {
  defaultCurrentPage: number;
  defaultItemsPerPage: string;
  elements: T[];
}

export const usePagination = <T>({
  defaultCurrentPage,
  defaultItemsPerPage,
  elements,
}: UsePaginationProps<T>) => {
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  const firstItemIndex = (currentPage - 1) * +itemsPerPage;
  const lastItemOnPageIndex = currentPage * +itemsPerPage;
  const lastItemIndex = lastItemOnPageIndex < elements.length
    ? lastItemOnPageIndex
    : elements.length;
  const selectedItems = elements.slice(firstItemIndex, lastItemIndex);

  const handleItemsPerPageChange = (newItemsPerPage: string) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(defaultCurrentPage);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    itemsPerPage,
    selectedItems,
    onPageChange,
    elements,
    handleItemsPerPageChange,
  };
};
