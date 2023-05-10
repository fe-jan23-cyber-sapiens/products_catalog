import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { getNumbers } from './utils';
import './Pagination.scss';
import arrowRight from './common_components/assets/icons/arrowRight.svg';
import arrowLeft from './common_components/assets/icons/arrowLeft.svg';

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (currentPage: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  onPageChange,
  currentPage,
  perPage,
  total,
}) => {
  const totalPageCount = Math.ceil(total / perPage);
  const isFirstPageIndex = currentPage === 1;
  const isLastPageIndex = currentPage === totalPageCount;
  const paginationRange = getNumbers(1, totalPageCount);

  const handlePreviousPageClick = () => {
    if (!isFirstPageIndex) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (!isLastPageIndex) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className="pagination pagination--large">
      <li
        className={classNames(
          'pagination__item',
          'pagination__item--previous',
          { 'pagination__item--disabled': isFirstPageIndex },
        )}
      >
        <Link
          to="#prev"
          aria-disabled={isFirstPageIndex}
          onClick={handlePreviousPageClick}
          className="pagination__link pagination__link--prev"
        >
          <img src={arrowLeft} alt="Arrow show left direction" />
        </Link>
      </li>

      {paginationRange.map((page) => (
        <li
          key={page}
          className={classNames('pagination__item', {
            'pagination__item--active': page === currentPage,
          })}
        >
          <Link
            to={`#${page}`}
            onClick={() => onPageChange(page)}
            className={classNames('pagination__link', {
              'pagination__link--active': page === currentPage,
            })}
          >
            {page}
          </Link>
        </li>
      ))}

      <li
        className={classNames('pagination__item', {
          'pagination__item--disabled': isLastPageIndex,
        })}
      >
        <Link
          to="#next"
          aria-disabled={isLastPageIndex}
          onClick={handleNextPageClick}
          className="pagination__link pagination__link--next"
        >
          <img src={arrowRight} alt="Arrow show right direction" />
        </Link>
      </li>
    </ul>
  );
};
