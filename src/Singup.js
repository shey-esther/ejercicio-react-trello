import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Provider } from "redux-zero/react";
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import Singin from './Singin.js'
import './App.css';

const Singup = () => {
  return (
    <main className="bodyfirst">
      <header>
        <div className="logo" />
      </header>
      <form >
        <input className="imptall" type="text" placeholder="First name" required="" />
        <input className="imptall"  type="text" placeholder="Last name" required="" />
        <input className="imptall"  type="email" placeholder="Email" required="" />
        <input className="imptall"  type="password" placeholder="Password" required="" />
        <input className="imptall"  type="password" placeholder="Confirm password" required="" />
        <button className="butontrans" type="submit">Sign up</button>
      </form>
      <br />
      <NavLink to={'/singin'} >Sing in</NavLink>
      <div className="footer">
        <a href="https://trello.com" className="new">
          Trello
        </a>
      </div>
    </main>
  )
}

const mapToProps = ({ trello }) => ({ trello });
export default connect(mapToProps)(Singup);
