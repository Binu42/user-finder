import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USER
} from '../types';

const GithubState = props => {
  const intialState = {
    users: [],
    user: {},
    loading: false,
    repos: []
  }

  const [state, dispatch] = useReducer(GithubReducer, intialState);

  useEffect(() => {
    const componentMount = async () => {
      setLoading();
      searchUsers('binu4')
    }
    componentMount();
    // eslint-disable-next-line
  }, [])

  // search github users
  const searchUsers = async text => {
    setLoading();
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
      type: SEARCH_USERS,
      payload: result.data.items
    })
  }


  // getuser information
  const getUser = async (login) => {
    setLoading();
    const result = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
      type: GET_USER,
      payload: result.data
    });
  }

  // getuser repos
  const getRepos = async (login) => {
    setLoading(true);
    const result = await axios.get(`https://api.github.com/users/${login}/repos?per_page=10&sorted=pushed&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
      type: GET_REPOS,
      payload: result.data
    })
  }

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USER })
  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <GithubContext.Provider value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    searchUsers,
    clearUsers,
    getUser,
    getRepos
  }}>
    {props.children}
  </GithubContext.Provider>
}
export default GithubState;