import React, { Component } from 'react';
import './App.css';

import Search from '../../containers/Search/Search'
import Dashboard from '../../containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Погода</h1>
        <Search />
        <Dashboard />
      </div>
    );
  }
}

export default App;
