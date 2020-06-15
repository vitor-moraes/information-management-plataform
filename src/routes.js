import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { isAuthenticated } from "./services/auth";

import HomePage from "./pages/HomePage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} component={HomePage} exact />
      <Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage} />
      <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginPage} />
      <Route
        path={`${process.env.PUBLIC_URL}/cadastro`}
        component={RegistrationPage}
      />
      <PrivateRoute
        path={`${process.env.PUBLIC_URL}/app`}
        component={() => <h1>Você está logado</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
