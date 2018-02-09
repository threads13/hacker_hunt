import React, { Component } from 'react';
import axios from 'axios';


class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: [],
      desc: []
    };
  }

  componentDidMount(){
    axios.get('https://hackerhunt.co/api/daily/0')
    .then(response => {
      const title = response.data.data.map(obj => obj.title);
      const desc = response.data.data.map(obj => obj.desc);
      console.log(title, desc);
      this.setState({
        title,
        desc
      })
    })
  }

  render() {
    return (
      <div
        style={{display: 'inline-block', width: '50%'}}
        className="list">
        <h6>Today</h6>
        <ul style={{listStyle: 'none'}}>
          {this.state.title.map(title =>
            <li style={{margin: '2em'}}>{title}</li>
          )}
          {this.state.desc.map(desc =>
            <li>{desc}</li>
          )}



        </ul>

      </div>
    );
  }
}

export default List;

//
// fetchEntries() {
//   const request = axios.get('https:www.//hackerhunt.co/api/daily/0');
//   return request;
// }
//
// <ul style={{listStyle: 'none'}}>
//   <li>
//     <h6>Starting</h6>
//     <p>Here is some content</p>
//   </li>
//   <li>
//     <h6>Second</h6>
//     <p>Here is some content</p>
//   </li>
//   <li>
//     <h6>Third</h6>
//     <p>Here is some content</p>
//   </li>
//   <li>
//     <h6>Fourth</h6>
//     <p>Here is some content</p>
//   </li>
// </ul>
// <div>
//   {request}
// </div>
