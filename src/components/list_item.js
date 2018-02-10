import React from 'react';

const ListItem = props => {
  console.log(props.title);
  return (
    <div>
      <li style={{marginTop: '20px'}}>{props.title}</li>
      <li>{props.desc}</li>
      <li style={{
          marginBottom: '10px',
          borderBottom: 'solid 1px gray',
          paddingBottom: '20px'
        }}>
        <em>{props.tags}</em>
    </li>
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
