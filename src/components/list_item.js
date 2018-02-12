import React from 'react';
import './list_item.css';
import TagItem from './tag_item'


const ListItem = props => {
  return (
    // const tags = props.tags.map((t) => (
    //   <TagItem
    //     key={t.id}
    //     {...t}
    //   />
    // ));


    <div>
      <h2 style={{marginTop: '30px'}}>{props.title}</h2>
      <p style={{
          fontSize: '14px',
          fontColor: '#2F2F2F',
          fontWeight: '300'
        }}>
        {props.desc}
      </p>
      <p id="lastItem">
        <TagItem tagItem={props.tags} />
      </p>
    </div>
  );
};

export default ListItem;

{/* <p id="lastItem">
  <em>{props.tags}</em>
</p>
   */}

        // <em><TagItem tagItem={tags} /></em>

// {this.state.title.map(title =>
//   <li style={{margin: '2em'}}>{title}</li>
// )}
// {this.state.desc.map(desc =>
//   <li>{desc}</li>
// )}
