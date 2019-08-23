import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import LoginAndRegisterPage from "./pages/login-and-register/login-and-register.component";
import { auth } from "./firebase/firebase.utils";
import "./App.scss";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    //Remove object reference from memory.
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={LoginAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
