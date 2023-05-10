import { FC, useState } from 'react';
import './CustomDropdown.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import arrowDown from './assets/icons/arrowDown.svg';

interface Dropdown {
  title?: string;
  options: string[];
  defaultValue?: string;
  size?: 'small';
}

export const CustomDropdown: FC<Dropdown> = ({
  title,
  options,
  defaultValue,
  size = 'medium',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [
    selectedOption,
    setSelectedOption,
  ] = useState(defaultValue || options[0]);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown dropdown--${size}`}>
      {title && <p className={`dropdown__title dropdown__title--${size}`}>{title}</p>}

      <button
        type="button"
        className={`dropdown__trigger dropdown__trigger--${size}`}
        onClick={toggleDropdown}
        onBlur={() => setIsOpen(false)}
      >
        <p className="dropdown__trigger-text">
          {selectedOption}
        </p>

        <img
          className={cn('dropdown__trigger-icon', {
            'dropdown__trigger-icon--up': isOpen,
          })}
          src={arrowDown}
          alt="Arrow switch direction up or down if you click on select menu"
        />
      </button>

      <div
        className={cn('dropdown__list', {
          'dropdown__list--hidden': !isOpen,
          [`dropdown__list--${size}`]: !!size,
        })}
      >
        {isOpen && (
          options.map((option) => (
            <Link
              to={`#${option}`}
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
