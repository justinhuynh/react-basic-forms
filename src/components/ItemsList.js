import React from 'react';

const ItemsList = props => {
  let items = props.items.map(item => {
    return(
      <li key={Math.random()}>
        {item.name}
      </li>
    )
  });

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default ItemsList;
