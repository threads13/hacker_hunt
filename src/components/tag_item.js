import React, { Component } from 'react';

const TagItem = props => {
  const array = props.tagItem.split(",");
  const tagArray = props.tagItem.split(",").map((arr) => {
    console.log(arr);
    return arr;
  });

  return(
    <div>
      <p>{tagArray}</p>
    </div>
  )
};


export default TagItem;
