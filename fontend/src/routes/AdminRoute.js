import React from "react";
import { Redirect, Route } from "react-router-dom";
const AdminRoute = ({ component: Component, ...rest }) => {
  const isAdmin = true;
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={(props) => {
        (isAuthenticated === isAdmin) === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        );
      }}
    />
  );
};

export default AdminRoute;
