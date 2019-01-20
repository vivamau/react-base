import React, { Component } from "react";
class Homepage extends Component {
render() {
    return (
        <div>
            <h1>Homepage</h1>
            <p>This is a empty ReactJS project, useful to bootstrap a react app. </p>
            <p> 
                Dependent libraries:
                <ul>
                    <li>"node-sass": "^4.10.0",</li>
                    <li>"node-sass-chokidar": "^1.3.4",</li>
                    <li>"npm-run-all": "^4.1.3",</li>
                    <li>"query-string": "^6.2.0",</li>
                    <li>"axios": "^0.18.0",</li>
                </ul>
            </p>
            <ul>
                <li>Example for <a href="#/page1?id=42384923">Routing and query string management</a></li>
                <li>Example for <a href="#/page2">a POST call using Axios</a></li>
            </ul>
            
        </div>
    )
}
}
export default Homepage;