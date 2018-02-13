import React, { Component } from 'react';
import TimeItem from './time_item';

const Summary = props => {
  const array = props.tagItem.split(",");
  const posted = timeConvert(1518496670);
  console.log(posted);

  const tagArray = array.map(arr => {
    return (
      <a
        style={{marginLeft: '5px',
          padding: '3px',
          border: 'solid 1px #797979',
          textTransform: 'uppercase'
        }}>
        {arr}
      </a>
    )
  });

  return(
    <div style={{color: '#797979'}}>

      <span style={{
          marginLeft: '4px',
          marginRight: '4px'
        }}>by
      </span>
      {props.author}
      {tagArray}
    </div>
  )
};

function timeConvert(utcSeconds){
  var d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  return d
}


export default Summary;
