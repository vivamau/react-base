import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CheckAuth } from "../helpers/helpers";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      CheckAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
