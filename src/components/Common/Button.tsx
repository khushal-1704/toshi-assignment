import React from "react";

interface ButtonInterface {
  onClick: () => void;
  children: React.ReactNode;
  buttonBgColor?: string;
  buttonStyling?: string;
}

const Button: React.FC<ButtonInterface> = ({
  buttonStyling = "",
  buttonBgColor = "",
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg border border-gray-200  focus:z-10 focus:ring-1 focus:ring-gray-100 ${buttonStyling} ${
        buttonBgColor
          ? buttonBgColor
          : "bg-gray-800 text-white hover:bg-gray-700 border-gray-600"
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
