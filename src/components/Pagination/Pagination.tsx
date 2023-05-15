import { FC, useContext } from 'react';
import classNames from 'classnames';
import { getCurrentImage, getNumbers } from '../../utils/utils';
import './Pagination.scss';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import arrowRightDark from '../../assets/arrows/arrowRightDark.svg';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowLeftDark from '../../assets/arrows/arrowLeftDark.svg';
import { ThemeContext } from '../../context/ThemeContext';

interface PaginationProps {
  total: number;
  perPage: string;
  currentPage: number;
  onPageChange: (currentPage: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  onPageChange,
  currentPage,
  perPage,
  total,
}) => {
  const totalPageCount = Math.ceil(total / +perPage);
  const isFirstPageIndex = currentPage === 1;
  const isLastPageIndex = currentPage === totalPageCount;
  const paginationRange = getNumbers(1, totalPageCount);
  const { theme } = useContext(ThemeContext);

  const currentRightIcon = getCurrentImage(theme, arrowRight, arrowRightDark);
  const currentLeftIcon = getCurrentImage(theme, arrowLeft, arrowLeftDark);

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
        <button
          type="button"
          aria-disabled={isFirstPageIndex}
          onClick={handlePreviousPageClick}
          className="pagination__link pagination__link--prev"
        >
          <img src={currentLeftIcon} alt="Arrow show left direction" />
        </button>
      </li>

      {paginationRange.map((page) => {
        return (
          <li
            key={page}
            className={classNames('pagination__item', {
              'pagination__item--active': page === currentPage,
            })}
          >
            <button
              type="button"
              onClick={() => onPageChange(page)}
              className={classNames('pagination__link', {
                'pagination__link--active': page === currentPage,
              })}
            >
              {page}
            </button>
          </li>
        );
      })}

      <li
        className={classNames('pagination__item', {
          'pagination__item--disabled': isLastPageIndex,
        })}
      >
        <button
          type="button"
          aria-disabled={isLastPageIndex}
          onClick={handleNextPageClick}
          className="pagination__link pagination__link--next"
        >
          <img src={currentRightIcon} alt="Arrow show right direction" />
        </button>
      </li>
    </ul>
  );
};
