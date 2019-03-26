import React, { Component } from "react";
import siteRoutes from "routes/site.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../routes/PrivateRoute";

class Homepage extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {siteRoutes.map((prop, key) => {
            if (prop.private)
              return (
                <PrivateRoute
                  exact
                  path={prop.path}
                  component={prop.component}
                  title={prop.name}
                  key={prop.path}
                />
              );
            return (
              <Route
                path={prop.path}
                component={prop.component}
                title={prop.name}
                key={prop.path}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Homepage;
