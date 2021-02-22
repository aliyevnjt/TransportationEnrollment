import React from 'react';

const Button = (props) => (
  <button type={props.type} className="btn btn-primary">
    {props.label}
  </button>
);

export default Button;
