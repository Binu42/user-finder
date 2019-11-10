import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import { setTimeout } from 'timers';
// import { async } from 'q';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [repos, setRepos] = useState([])


  useEffect(() => {
    const componentMount = async () => {
      setLoading(true);
      const result = await axios.get(`https://api.github.com/search/users?q=binu4&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUsers(result.data.items);
      setLoading(false);
    }
    componentMount();
    // eslint-disable-next-line
  }, [])

  // search github users
  const searchUsers = async text => {
    setLoading(true);
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(result.data.items);
    setLoading(false);
  }

  // clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  // Show Alert
  const showAlert = (message, type) => {
    setAlert({message, type});
    setTimeout(() => {
      setAlert(null, type);
    }, 2000);
  }

  // getuser information
  const getUser = async (login) => {
    setLoading(true);
    const result = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(result.data);
    setLoading(false);
  }

  // getuser repos
  const getRepos = async (login) => {
    setLoading(true);
    const result = await axios.get(`https://api.github.com/users/${login}/repos?per_page=10&sorted=pushed&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(result.data);
    setLoading(false);
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route exact path='/user-finder' render={props => (
            <Fragment>
              <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} showAlert={showAlert} />
              <div className="container">
                <Users users={users} loading={loading} />
              </div>
            </Fragment>
          )} />

          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' render={props => (
            <User {...props} getUser={getUser} getRepos={getRepos} repos={repos} user={user} loading={loading} />
          )} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
