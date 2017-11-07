import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import logo from './logo.svg';
import './App.css';
import {
  NavLink,
} from 'react-router-dom'

const Singin = () => {
    return (
      <main className="bodyfirst">
        <header>
          <div className="logo" />
        </header>
        <form>
          <input type="Email" placeholder="Email" required defaultValue="john@phoenix-trello.com"/>
          <input type="password" placeholder="Password" required defaultValue={12345678}/>
          <button type="submit" >Sign in</button>
        </form>
        <br />
        <NavLink to={'/singup'}>Create new account</NavLink>
      </main>
    )
}
export default Singin;
// const mapToProps = ({  }) => ({ });
// export default connect(mapToProps)(Singin);