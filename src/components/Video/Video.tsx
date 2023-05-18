import { FC, useState } from 'react';
import './Video.scss';
import volumeHigh from '../../assets/volumeHigh.svg';
import volumeXmark from '../../assets/volumeXmark.svg';
import { VIDEO_PATH } from '../../utils/constants';

export const Video: FC = () => {
  const [toggle, setToggle] = useState(false);

  const correctIcon = toggle
    ? volumeXmark
    : volumeHigh;

  const handleToggleMute = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <div className="video__wrapper">

      <img
        className="video__wrapper-icon"
        src={correctIcon}
        alt="Mute & unmute icons"
        onClick={handleToggleMute}
      />

      <div className="video__wrapper--halfTransparent" />
      <video
        src={VIDEO_PATH}
        className="video__content"
        autoPlay
        muted={!toggle}
        loop
      >
        <track src="" />
      </video>
    </div>
  );
};
