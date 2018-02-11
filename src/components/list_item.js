import React from 'react';
import './list_item.css';


const ListItem = props => {
  const style = {
    marginBottom: '10px',
    borderBottom: 'solid 1px #F2F6F7',
    paddingBottom: '30px',
    fontSize: '12px',
    fontWeight: '300'
  };

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
      <p style={style}> <em>{props.tags}</em></p>
    </div>
  );
};

export default ListItem;


// {this.state.title.map(title =>
//   <li style={{margin: '2em'}}>{title}</li>
// )}
// {this.state.desc.map(desc =>
//   <li>{desc}</li>
// )}
