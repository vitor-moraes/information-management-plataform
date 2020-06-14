import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage'

function App() {
  return (
    // <div className="height-100vh root ">
    //   <HomePage />
    // </div>
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} component={HomePage} exact />
        <Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage} />
        <Route path={`${process.env.PUBLIC_URL}/cadastro`} component={RegistrationPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
