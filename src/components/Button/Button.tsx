import React from 'react';

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
      type="button"
      className={`custom-button ${btnType}`}
      style={{ width: `${btnWidth}`, height: `${btnHeight}` }}
    >
      {children}
    </button>
  );
};
