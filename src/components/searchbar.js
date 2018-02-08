import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    var request = axios.get('https://hackerhunt.co/api/daily/0')
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });


    return (
      <div
        style={{textAlign: 'center', marginTop: '1em', marginBottom: '4em'}}
        className="searchbar">
        <input
          value={this.state.term}
          onChange={event => this.handleInputChange(event.target.value)}
        />
      </div>
    );
  }

  handleInputChange(term){
    this.setState({ term });

  }

}

export default SearchBar;
