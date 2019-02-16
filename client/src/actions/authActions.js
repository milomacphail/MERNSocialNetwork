<<<<<<< HEAD
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
=======
//Import axios
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types.js';


>>>>>>> c2ddcac293ba4a22083a8e97f56c120dbee5f2af

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
<<<<<<< HEAD
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
=======
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
>>>>>>> c2ddcac293ba4a22083a8e97f56c120dbee5f2af
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

<<<<<<< HEAD
// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
=======

//Login user
export const loginUser = (userData) => dispatch => {
    axios
        .post('api/users/login', userData)
        .then(res=> {
            //Save to local storage
            const { token } = res.data;
            //Set token to local storage
            localStorage.setItem('jwtToken', token);
            //Set token to auth Header
            setAuthToken(token);
            //Decode token to get user data
            const decoded = jwt_decode(token);
            //set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

//set logged-in user

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded 
    }
}

//Log user out
export const logoutUser = () => dispatch => {
    //remove token from local storage
    localStorage.removeItem('jwtToken');
    //Remove auth header for future requests
    setAuthToken(false);
    //set current user to empty object; set isAuthenticated to false
    dispatch(setCurrentUser({}));
    
}
>>>>>>> c2ddcac293ba4a22083a8e97f56c120dbee5f2af
