import React from "react";

import "./login-and-register.scss";
import Login from "../../components/log-in/log-in.component";
import Register from "../../components/register/register.component";

const LoginAndRegisterPage = () => {
  return (
    <div className="login-and-register">
      <Login />
      <Register />
    </div>
  );
};

export default LoginAndRegisterPage;
