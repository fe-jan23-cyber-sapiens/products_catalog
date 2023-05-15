import {
  FC,
  useState,
  useEffect,
  useContext,
} from 'react';
import './ButtonScrollTop.scss';
import classNames from 'classnames';
import * as images from '../../assets';
import { getCurrentImage } from '../../utils/utils';
import { ThemeContext } from '../../context/ThemeContext';

export const ButtonScrollTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  const currentArrow = getCurrentImage(
    theme,
    images.arrow_up,
    images.arrow_up_dark,
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const showTrigger = 100;
      const hideTrigger = document.documentElement.scrollHeight
        - window.innerHeight - 100;

      if (scrollY > showTrigger && scrollY < hideTrigger) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      aria-label="scroll-to-top"
      type="button"
      className={classNames('scroll-to-top', {
        'scroll-to-top-visible': isVisible,
      })}
      onClick={scrollToTop}
    >
      <img src={currentArrow} alt="scroll-to-top" />
    </button>
  );
};
