import React, { Component } from 'react';
import './searchbar.css';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <div><img src="https://i.gyazo.com/c50f9fc9e2dab3f77e31600c88e8a0ef.png" /></div>
        <div className="searchbar">
          <input
            value={this.state.term}
            onChange={event => this.handleInputChange(event.target.value)}
          />
        </div>
      </div>

    );
  }

  handleInputChange(term){
    this.setState({ term });

  }

}

export default SearchBar;
