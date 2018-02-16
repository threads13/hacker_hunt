import React, { Component } from 'react';
import SearchBar from './searchbar';
import List from './list';
import Topics from './topics';
import Subscribe from './subscribe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{fontFamily: 'Roboto'}}>
        <SearchBar />
        <div className="main">
          <Topics />
          <Subscribe />
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
