import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import LoginAndRegisterPage from "./pages/login-and-register/login-and-register.component";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.scss";

class App extends React.Component {
  unsubscribeAuth = null;

  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setUser(userAuth);
      }
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

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
