import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Provider } from "redux-zero/react";
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Board = () => {
  return (
    <row >
      <div className="bodyfirstboard">
      <div className="col-md-4 col-xs-4 ">
      <button type="submit"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Boards</button>
      </div>
      <div className="col-md-4 col-xs-4">
        <div className="logo1" />
      </div>
      <div className="col-md-4 col-xs-4">
      <button type="submit"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span>Esther</button>
      <button type="submit"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>Sign out</button>
      </div>
      </div>
    </row>
  )
}

const mapToProps = ({ trello }) => ({ trello });
export default connect(mapToProps)(Board);