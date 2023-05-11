import React from 'react';
/* eslint-disable */

// type ButtonType = 'button';

interface ButtonProps {
  btnWidth: string,
  btnHeight: string,
  btnType?: string,
  children: React.ReactNode,
}

export const CustomButton: React.FC<ButtonProps> = ({
  btnWidth,
  btnHeight,
  btnType,
  children,
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      className={`custom-button ${btnType}`}
      style={{ width: `${btnWidth}`, height: `${btnHeight}` }}
    >
      {children}
    </button>
  );
};
