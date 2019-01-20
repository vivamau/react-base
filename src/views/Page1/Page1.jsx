import React, { Component } from "react";
import QueryString from "query-string";
class Page1 extends Component {

    getParameters = () => {
        const values = QueryString.parse(this.props.location.search);
        return (values)
    }

    //constructor(props) {
    //    super(props)
    //    this.state = { }
    //}

    //componentDidMount() {
    //    this.setState(QueryString.parse(this.props.location.search));
    //}
   // ID Parameters passed is test: {this.state.id}
   
    render() {
        return (
            <div>
                <h1>Page1</h1>
                ID Parameters passed is test: {this.getParameters().id}
                Library used is <a href="">query-string</a>
            </div>
        )
    }
}
export default Page1;