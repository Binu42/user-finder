import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_ALERT,
  SET_LOADING,
  CLEAR_USERS
} from '../types';

const GithubState = props => {
  const intialState = {
    users: [],
    user: {},
    loading: false,
    repos: []
  }
}