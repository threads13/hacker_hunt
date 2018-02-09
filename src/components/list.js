import React, { Component } from 'react';
import axios from 'axios';


class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    axios.get('https://hackerhunt.co/api/daily/0')
    .then(response => {
      const posts = response.data.data.map(obj => obj.title);
      console.log(posts,);
      this.setState({ posts })
    })
  }

  render() {
    return (
      <div
        style={{display: 'inline-block', width: '50%'}}
        className="list">
        <h6>Today</h6>
        <ul style={{listStyle: 'none'}}>
          {this.state.posts.map(post =>
            <li style={{margin: '2em'}}>{post}</li>
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
