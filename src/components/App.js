import React, { Component } from 'react';
import SearchBar from './searchbar';
import List from './list';
import Topics from './topics';
import Subscribe from './subscribe';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    // var request = axios.get('https://hackerhunt.co/api/daily/0')
    // .then(response => {
    //   console.log(response.data.data[0].title);
    //   this.setState = response;
    // })
    // .catch(error => {
    //   console.log(error);
    // });

    return (
      <div className="App">
        <SearchBar />
        <Topics />
        <Subscribe />
        <List/>
      </div>
    );
  }
}

export default App;
