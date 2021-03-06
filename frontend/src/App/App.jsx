import React, { Component } from "react";
import SiteRouter from "./../Router";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../components/layout/Landing/Landing";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import Navigation from "../components/Navigation/Navigation";
import Account from "../components/Account/Account";
import Settings from "../components/Settings/Settings";
import CardHome from "../CardManagement/CardHome";
import Converter from "../containers/Converter/Converter";
import Transactions from "../containers/Transactions/Transactions";
import Messages from "../containers/Messages/Messages";
import store from "../store";

import Layout from "../hoc/Layout/Layout";

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import "./App.css";
import PageNotFound from "../components/PageNotFound/PageNotFound";

import Crypto from "./../components/crypto/Crypto";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
					{/* <Route path="/crypto" component={Crypto} /> */}
          <PrivateRoute component={Navigation} />
          <Layout>
            <PrivateRoute component={Sidebar} />
            <Switch>
							<PrivateRoute path="/crypto" component={Crypto} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/account" component={Account} />
              <PrivateRoute path="/transactions" component={Transactions} />
              <PrivateRoute path="/converter" component={Converter} />
              <PrivateRoute path="/settings" component={Settings} />
              <PrivateRoute path="/messages" component={Messages} />
              <PrivateRoute path="/card" component={CardHome} />
              <PrivateRoute component={PageNotFound} />
            </Switch>
          </Layout>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

// const App = () => {
// 	return (
// 		<>
// 			{/* <SiteRouter /> */}
// 		</>
// 	);
// };

export default App;
