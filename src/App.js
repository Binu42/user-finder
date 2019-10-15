import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItems';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <UserItem />
        </div>
      </div>
    );
  }
}

export default App;
