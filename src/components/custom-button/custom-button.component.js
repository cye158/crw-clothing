import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, isGoogleLogin, ...otherProps }) => {
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
