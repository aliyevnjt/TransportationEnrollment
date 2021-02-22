import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  if (props.show) {
    return <label htmlFor={props.id}>{props.label}</label>;
  }
  return '';
};

Label.propTypes = {};
Label.defaultProps = {
  show: true,
};

export default Label;
