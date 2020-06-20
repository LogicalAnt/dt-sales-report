import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = token ? true : false;
  return isAuthenticated ? (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  ) : (
    <Redirect to="/login" />
  );
};
