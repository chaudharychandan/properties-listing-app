import React, { Component } from 'react';
import './App.css';

import List from 'components/List';
import Filter from 'components/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
        <List />
      </div>
    );
  }
}

export default App;
