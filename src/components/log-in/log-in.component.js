import React from "react";
import FormInput from "../form-input/form-input.component";
import "./log-in.scss";
import CustomButton from "../custom-button/custom-button.component";
import { LogInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

class Login extends React.Component {
  state = { email: "", password: "" };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.log("Error Login: ", e.message);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="log-in">
        <h2 className="title">I already have an account</h2>
        <span>Log in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Log in</CustomButton>
            <CustomButton onClick={LogInWithGoogle} isGoogleLogin>
              Log in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
