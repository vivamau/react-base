import React, { Component } from "react";
import QueryString from "query-string";
class Page1 extends Component {



getParameters = () => {
    const values = QueryString.parse(this.props.location.search);
    return (values)
}
render() {
    return (
        <div>
            <h1>Page1</h1>
            ID Parameters passed is test: {this.getParameters().id};
        </div>
    )
}
}
export default Page1;