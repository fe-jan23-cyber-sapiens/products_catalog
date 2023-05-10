import React from 'react';

type ButtonType = 'button';

interface ButtonProps {
  btnWidth: string,
  btnHeight: string,
  btnType?: ButtonType,
  children: React.ReactNode,
}

export const CustomButton: React.FC<ButtonProps> = ({
  btnWidth,
  btnHeight,
  btnType = 'button',
  children,
}) => {
  return (
    <button
      type={btnType}
      className={`custom-button ${btnType}`}
      style={{ width: `${btnWidth}`, height: `${btnHeight}` }}
    >
      {children}
    </button>
  );
};

