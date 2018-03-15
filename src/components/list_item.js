import React from 'react';
import Summary from './summary'
import './list_item.css';


const ListItem = ({ title, desc, tags, date, author  }) => {
  return (
    <div>
      <h2 style={{marginTop: '30px'}}>{title}</h2>
      <p style={{
          fontSize: '14px',
          fontColor: '#2F2F2F',
          fontWeight: '300'
        }}>
        {desc}
      </p>
      <span>
        <div id="lastItem">
          <Summary
            tagItem={tags}
            posted={date}
            author={author}
          />
        </div>
      </span>
    </div>
  );
};

export default ListItem;
