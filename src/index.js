
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Singup from './Singup';
import Singin from './Singin';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route exact path="/singin" render={() => <Singin />} /> */}
            <Route exact path="/" component ={Singin} />
            <Route exact path="/singin" component ={Singin} />
            <Route exact path="/singup" component ={Singup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
