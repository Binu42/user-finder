import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { setTimeout } from 'timers';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/search/users?q=binu4&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: result.data.items, loading: false });
  }

  // search github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: result.data.items, loading: false });
  }

  // clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  // Show Alert
  showAlert = (message, type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  }

  // getuser information
  getUser = async (login) => {
    this.setState({ loading: true });
    const result = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: result.data, loading: false });
    console.log(result);
  }

  render() {
    const {users, user, loading, alert} = this.state;
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/user-finder' render={props => (
              <Fragment>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} showAlert={this.showAlert} />
                <div className="container">
                  <Users users={users} loading={loading} />
                </div>
              </Fragment>
            )} />

            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props => (
              <User {...props} getUser={this.getUser} user={user} loading={loading}/>
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
