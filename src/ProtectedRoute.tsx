import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  ) : (
    <Redirect to="/login" />
  );
};
