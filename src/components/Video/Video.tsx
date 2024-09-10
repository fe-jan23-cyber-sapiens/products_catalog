import {
  FC,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import './Video.scss';
import * as videos from '../../assets';

interface Props {
  children: ReactNode,
}

export const Video: FC<Props> = ({ children }) => {
  const video = useRef<HTMLVideoElement>();

  useEffect(() => {
    window.console.log(1);

    if (video.current) {
      video.current.volume = 0.05;
    }
  }, []);

  return (
    <>
      <div className="video__wrapper">

        <div className="video__wrapper--halfTransparent" />

        <div className="children-wrapper">
          {children}
        </div>

        <video
          src={videos.promo}
          className="video__content"
          autoPlay
          loop
        />
      </div>
    </>
  );
};
