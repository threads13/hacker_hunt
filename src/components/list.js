import React, { Component } from 'react';


class List extends Component {
  render() {
    return (
      <div
        style={{display: 'inline-block', width: '50%'}}
        className="list">
        <ul style={{listStyle: 'none'}}>
          <li>
            <h6>Starting</h6>
            <p>Here is some content</p>
          </li>
          <li>
            <h6>Second</h6>
            <p>Here is some content</p>
          </li>
          <li>
            <h6>Third</h6>
            <p>Here is some content</p>
          </li>
          <li>
            <h6>Fourth</h6>
            <p>Here is some content</p>
          </li>
        </ul>
      </div>
    );
  }

}

export default List;
