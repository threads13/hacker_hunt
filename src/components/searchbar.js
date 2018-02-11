import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
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
