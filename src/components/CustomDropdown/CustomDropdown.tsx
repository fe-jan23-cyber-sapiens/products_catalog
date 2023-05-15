import { FC, useContext, useState } from 'react';
import './CustomDropdown.scss';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import arrowDown from '../../assets/arrows/arrowDown.svg';
import arrowDown_dark from '../../assets/arrows/arrowDown_dark.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { getCurrentImage } from '../../utils/utils';

interface DropdownProps {
  title?: string;
  options: string[];
  defaultValue?: string;
  size?: 'small';
  type?: string,
  handleItemsPerPageChange: (newItemsPerPage: string) => void;
}

export const CustomDropdown: FC<DropdownProps> = ({
  title,
  options,
  defaultValue,
  type,
  size,
  handleItemsPerPageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [
    selectedOption,
    setSelectedOption,
  ] = useState(defaultValue || options[0]);
  const [searchParams] = useSearchParams();

  const getSearchParamsWith = (key: string, option: string) => {
    searchParams.set(key, option.toLowerCase());

    return searchParams.toString();
  };

  const { theme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  const currentIcon = getCurrentImage(
    theme,
    arrowDown,
    arrowDown_dark,
  );

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleOptionClick = (option: string) => {
    handleItemsPerPageChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown dropdown--${size}`}>
      {title && (
        <p className={`dropdown__title dropdown__title--${size}`}>
          {title}
        </p>
      )}

      <button
        type="button"
        className={`dropdown__trigger dropdown__trigger--${size}`}
        onClick={toggleDropdown}
      >
        <p className="dropdown__trigger-text">
          {selectedOption}
        </p>

        <img
          className={classNames('dropdown__trigger-icon', {
            'dropdown__trigger-icon--up': isOpen,
          })}
          src={currentIcon}
          alt="Arrow switch direction up or down if you click on select menu"
        />
      </button>

      <div
        className={classNames('dropdown__list', {
          'dropdown__list--hidden': !isOpen,
          [`dropdown__list--${size}`]: !!size,
        })}
      >
        {isOpen && (
          options.map((option) => (
            <Link
              to={{
                pathname,
                search: getSearchParamsWith(
                  type === 'sort' ? 'sort' : 'items',
                  option,
                ),
              }}
              className="dropdown__list__item"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
