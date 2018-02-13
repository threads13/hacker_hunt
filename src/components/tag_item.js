import React, { Component } from 'react';

const TagItem = props => {
  const array = props.tagItem.split(",");
      console.log(array);
  const tagArray = array.map(arr => {
    return (
      <a
        style={{marginLeft: '5px',
          padding: '3px',
          border: 'solid 1px #797979',
          color: '#797979',
          textTransform: 'uppercase'
        }}>
        {arr}
      </a>
    )
  });

  return(
    <div>
      {tagArray}
    </div>
  )
};


export default TagItem;
