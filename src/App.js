import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound'
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
              <Route exact path='/user-finder' component={Home}/>
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound}/>
            </Switch>
            <Footer />
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
