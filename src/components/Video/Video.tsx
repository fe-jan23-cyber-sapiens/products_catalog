import {
  FC,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import './Video.scss';
import volumeHigh from '../../assets/volumeHeigh.svg';
import volumeXmark from '../../assets/volumeXmark.svg';
import { VIDEO_PATH } from '../../utils/constants';

interface Props {
  children: ReactNode,
}

export const Video: FC<Props> = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const video = useRef<HTMLVideoElement>();

  useEffect(() => {
    window.console.log(1);

    if (video.current) {
      video.current.volume = 0.05;
    }
  }, []);

  const correctIcon = !toggle
    ? volumeXmark
    : volumeHigh;

  const handleToggleMute = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <>
      <div className="video__wrapper">
        <img
          className="video__wrapper-icon"
          src={correctIcon}
          alt="Mute & unmute icons"
          onClick={handleToggleMute}
        />

        <div className="video__wrapper--halfTransparent" />

        <div className="children-wrapper">
          {children}
        </div>

        <video
          src={VIDEO_PATH}
          className="video__content"
          autoPlay
          muted={!toggle}
          loop
        />
      </div>
    </>
  );
};
