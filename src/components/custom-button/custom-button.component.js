import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, isGoogleLogin, ...otherProps }) => {
  console.log({ children });
  return (
    <button
      className={`${isGoogleLogin ? "google-login" : ""} custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
