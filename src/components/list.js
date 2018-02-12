import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './list_item';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      entry: []
    };
  }

  componentDidMount() {
    axios.get('https://hackerhunt.co/api/daily/0')
      .then(res => {
        const entry = res.data.data;
        this.setState({ entry });
    });
  }

  render() {
    const entry = this.state.entry.map((t) => (
      <ListItem
        key={t.id}
        {...t}
      />
    ));

    return (
      <div
        style={{display: 'inline-block', width: '50%'}}
        className="list">
        <h6>Today</h6>
        <div>
          {entry}
        </div>
      </div>
    );
  }
}

export default List;
