import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Footer from './components/layout/Footer';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/alertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="app">
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path='/user-finder' render={props => (
                <Fragment>
                  <Search />
                  <div className="container">
                    <Users />
                  </div>
                </Fragment>
              )} />

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
