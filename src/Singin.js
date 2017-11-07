import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Provider } from "redux-zero/react";
import {NavLink, HashRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Singin = () => {
    return (
      <main className="bodyfirst">
        <header>
          <div className="logo" />
        </header>
        <form>
          <input type="Email" placeholder="Email" required defaultValue="john@phoenix-trello.com"/>
          <input type="password" placeholder="Password" required defaultValue={12345678}/>
          <NavLink to={'/Board'}><button type="submit">Sign in</button></NavLink>
        </form>
        <br />
        <NavLink to={'/singup'}>Create new account</NavLink>
      </main>
    )
}
// export default Singin;
const mapToProps = ({trello }) => ({trello});
export default connect(mapToProps)(Singin);