import React from 'react';

const TextField = props => {
  return (
    <input
      name='itemField'
      type='text'
      value={props.content}
      onChange={props.handlerFunction}
    />
  );
}

export default TextField;
