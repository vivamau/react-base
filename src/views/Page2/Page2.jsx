import React, { Component } from "react";
import axios from "axios";
import {SAMPLEBODY} from "../../config/config"
class Page2 extends Component {
    state = {
        loading: false,
        loaded: false,
        error: "",
        data: null
      };
    
    getParameters = () => {
        this.setState({ loading: true });
        const headers = {
            'Content-Type': 'application/json; charset=utf-8'
        }
        const body = SAMPLEBODY
        axios.post('/sugar/rest/v11/oauth2/token', body,{headers: headers} )
        .then((response) => {
            console.log(response)
            this.setState({
                data: response,
                loading: false,
                loaded:true,
                error: false
              });
          })
          .catch(error => {
            console.error("error: ", error);
            this.setState({
              // objects cannot be used as a react child
              // -> <p>{error}</p> would throw otherwise
              error: `${error}`,
              loading: false
            });
          });
    }

    render() {
        return (
            <div>
                <h1>Page2</h1>
                <p>To avoid CORS issues, define the proxy parameter in <strong>package.json</strong>. More at <a href="https://codesandbox.io/s/rm4pyq9m0o">this codebox</a>.</p>
                <form onSubmit={this.getParameters}>
                    <button>Submit</button>
                </form>
                {this.state.loading ? "Your POST has been sent, please wait for a response..." : ""}           
                {this.state.loaded ? "Load complete. Check the console log." : ""}         
            </div>
        )
    }
}
export default Page2;