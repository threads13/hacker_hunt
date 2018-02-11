import React, { Component } from 'react';
import './subscribe.css';

class Subscribe extends Component {
  constructor(props){
    super(props);

    this.state = { email: ''}
  }


  render() {
    return (
      <div
        className="subscribe">
        <h2 style={{
            maxWidth: '90%',
            lineHeight: '25px',
            marginTop: '40px'
          }}>
          Get high on categorized
          Show HN submissings
        </h2>
        <p>We know the struggle.  A lot of great stuff on Hacker News gets lost in the /shownew limbo.</p>
        <p>Get the weekly top Show HN picks in your inbox</p>

      <form>
        <input
          className="email"
          placeholder="Your e-mail"
          value={this.state.email}
          onChange={event => this.handleInputChange(event.target.value)}
        />
      <button className="email">Subscribe</button>
      </form>
      </div>
    );
  }

  handleInputChange(email){
    this.setState({ email });

  }
}


export default Subscribe;
