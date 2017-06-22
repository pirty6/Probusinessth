import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  ConnectedRouter as Router,
  push
} from 'react-router-redux';
import { Route, Switch } from 'react-router';



class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('react-content'));
