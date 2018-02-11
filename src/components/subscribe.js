import React, { Component } from 'react';
import './subscribe.css';

class Subscribe extends Component {

  render() {
    return (
      <div
        className="subscribe">
        <h2 style={{maxWidth: '90%', lineHeight: '25px'}}>
          Get high on categorized
          Show HN submissings
        </h2>
        <p>We know the struggle.  A lot of great stuff on Hacker News gets lost in the /shownew limbo.</p>
        <p>Get the weekly top Show HN picks in your inbox</p>

      <form>
        <h1>your email</h1>
        <button>Subscribe</button>
      </form>

      </div>
    );
  }

}

export default Subscribe;
