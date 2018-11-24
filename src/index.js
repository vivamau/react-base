import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "assets/sass/base.css";

ReactDOM.render(
    <HashRouter>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route to={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </HashRouter>,
    document.getElementById("root")
  );