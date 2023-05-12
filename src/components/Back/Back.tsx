import arrowLeft from '../../assets/arrows/Arrow Left.png';
import './Back.scss';

export const Back = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <button
      type="button"
      className="back"
      onClick={handleClick}
    >
      <img src={arrowLeft} alt="arrow left" />

      <p className="back__text">
        Back
      </p>
    </button>
  );
};
