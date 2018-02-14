import React from 'react';
import './list_item.css';
import Summary from './summary'

const ListItem = props => {
  return (
    <div>
      <h2 style={{marginTop: '30px'}}>{props.title}</h2>
      <p style={{
          fontSize: '14px',
          fontColor: '#2F2F2F',
          fontWeight: '300'
        }}>
        {props.desc}
      </p>
      <span>
        <div id="lastItem">
          <Summary
            tagItem={props.tags}
            posted={props.date}
            author={props.author}
          />
        </div>
      </span>
    </div>
  );
};

export default ListItem;
