import React from "react";
import { Redirect, Route } from "react-router-dom";
const isAuthenticated = JSON.parse(localStorage.getItem('isAuth'));
const AuthRoute = ({ component: Component, ...rest }) => {
console.log(typeof(isAuthenticated))
  return (
    <Route
      {...rest}
      render={(props) => {
        isAuthenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default AuthRoute;
