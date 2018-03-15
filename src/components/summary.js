import React from 'react';

const Summary = props => {
  const array = props.tagItem.split(",");

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
    <summary style=
      {{
        color: '#797979',
        display: 'flex',
        flexWrap: 'wrap'
      }}>

      <span style=
        {{
          marginLeft: '4px',
          marginRight: '4px'
        }}>by
      </span>
      {props.author}
      {tagArray}
    </summary>
  )
};

export default Summary;
