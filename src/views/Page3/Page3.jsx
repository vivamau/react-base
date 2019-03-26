import React, { Component } from "react";
import axios from "axios";
class Page3 extends Component {
    state = {
        loading: true,
        error: "",
        data: null
      };

    authHeader = () => {
        let auth = localStorage.getItem('auth');
        if (auth) {
            return {
                'Content-Type': 'application/json; charset=utf-8',
                'OAuth-Token': auth
            };
        } else {
            return {'Content-Type': 'application/json; charset=utf-8'};
        }
    }

    loadData = () => {
        this.setState({ loading: true });
        return axios
          .get(
            `https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`
          )
          .then(result => {
            console.log(result);
            this.setState({
              data: result.data.items,
              loading: false,
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
      };

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { loading, error, data } = this.state;
        if (loading) {
          return <p>Loading ...</p>;
        }
        if (error) {
          return (
            <p>
              There was an error loading the repos.{" "}
              <button onClick={this.loadData}>Try again</button>
            </p>
          );
        }
        return (
          <div>
            <h1>Test</h1>
            {data.map(repo => <p key={repo.id}>{repo.name}</p>)}
          </div>
        );
      }
}
export default Page3;