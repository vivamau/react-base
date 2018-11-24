import React, { Component } from "react";
import siteRoutes from "routes/site.jsx";
import { Route, Switch, Redirect } from "react-router-dom";

class Homepage extends Component {

    render() {
        return (
            <Switch>
            {siteRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            return (
                <Route path={prop.path} component={prop.component} key={key} />
            );
            })}
            </Switch>
        )
    }
}

export default Homepage;