import React from 'react';

const Label = (props) => {
  const { id, label } = props;
  if (props.show) {
    return <label htmlFor={id}>{label}</label>;
  }
  return '';
};

Label.defaultProps = {
  show: true,
};

export default Label;
