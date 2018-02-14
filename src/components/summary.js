import React, { Component } from 'react';
import _ from 'lodash';

const Summary = props => {
  const array = props.tagItem.split(",");
  // const dates = timeConvert(props.posted);
  // const converted = Object.values(dates);

  // const posted = Object.keys(dates).map(arr => {
  //   return (
  //     <div>{arr}</div>
  //   )
  // });

  // const datesArr = _.map(dates, posted => {
  //   return (
  //     <p>
  //       {posted}
  //     </p>
  //   );
  // });
  //
  // console.log(datesArr);

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
      {/* {datesArr} */}
    </div>
  )
};

function timeConvert(utcSeconds){
  var d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  return d
}

export default Summary;
