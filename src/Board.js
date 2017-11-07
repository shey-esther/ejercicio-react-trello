import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Provider } from "redux-zero/react";
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const AddButton = () => {
 return(
  <div>
  <input placeholder="Add list :)......" />
  <br />
  <button className>Save</button>
  <button>Cancel</button>
</div>
 )
}
const Body = () => {
  return (
    <div>
      <input placeholder="Add list :)......" />
      <AddButton/>
    </div>
  )
}
const Board = () => {
  return (
    <row >
      <div className="bodyfirstboard">
        <div className="col-md-4 col-xs-4 cols">
          <a type="submit"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Boards</a>
        </div>
        <div className="col-md-4 col-xs-4 cols">
          <div className="logo1" />
        </div>
        <div className="col-md-4 col-xs-4 cols">
          <a type="submit"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span>Esther</a>
          <a type="submit"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>Sign out</a>
        </div>
      </div>
      <Body />
    </row>
  )
}

const mapToProps = ({ trello }) => ({ trello });
export default connect(mapToProps)(Board);