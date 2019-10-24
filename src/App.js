import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true});
    const result = await axios.get(`https://api.github.com/search/users?q=binu4&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: result.data.items, loading: false});
  }

  // search github users
  searchUsers = async text => {
    this.setState({loading: true});
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: result.data.items, loading: false});
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Search searchUsers={this.searchUsers}/>
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading}/>
        </div>
      </div>
    );
  }
}

export default App;
