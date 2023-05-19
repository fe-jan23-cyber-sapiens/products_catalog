import {
  FC,
  memo,
  useContext,
} from 'react';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowLeft_dark from '../../assets/arrows/arrowLeft_dark.svg';
import './Back.scss';
import { getCurrentImage } from '../../utils/helper';
import { ThemeContext } from '../../context/ThemeContext';

export const Back: FC = memo(() => {
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    window.history.back();
  };

  const currentIcon = getCurrentImage(theme, arrowLeft, arrowLeft_dark);

  return (
    <button
      type="button"
      className="back"
      onClick={handleClick}
    >
      <img
        src={currentIcon}
        alt="arrow left"
      />

      <p className="back__text">
        Back
      </p>
    </button>
  );
});
