import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { setCurrentUser } from './actions/authActions';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { createStore, applyMiddleware } from 'redux';

import './App.css';

//check for token
if (localStorage.jwtToken) {
    //set auth Token header
     setAuthToken(localStorage.jwtToken);
    //Decode token and get user login and info
    const decoded = jwt_decode(localStorage.jwtToken);
    //call SET_CURRENT_USER
    store.dispatch(setCurrentUser(decoded));
}

//check for expired token
const currentTime = Date.now() / 1000;

if(decoded.exp < currentTime) {
  //logout user
  store.dispatch(logoutUser());
  //TODO: Clear Current profile
  //redirect to login
  window.location.href = '/login';
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <Router>
      <div className="App">
       <Navbar />
       <Route exact path="/" component={ Landing } />
      <div className="container">
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
      </div>
      <Footer />
      </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
