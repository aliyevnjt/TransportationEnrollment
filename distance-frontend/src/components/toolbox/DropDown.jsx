import React from 'react';
import PropTypes from 'prop-types';

const DropDown = (props) => {
  let { label } = props;

  if (label.startsWith('*')) {
    label = label.substr(2);
  } else label = label;
  return (
      <div>
        <div className={`input-field col ${props.col}`}>
          <select
              id={props.id}
              value={props.value}
              onChange={props.onChange}
              required={props.required}
          >
            <option value="">{label}</option>

            {props.options.map((o) => (
                <option value={o.value}>{o.label}</option>
            ))}
          </select>
          <label htmlFor={props.id}>{props.label}</label>
        </div>
      </div>
  );
};

DropDown.prototype = {
  // data:PropTypes.arrayOf.isRequired{

  // }
  id: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

DropDown.defaultProps = {
  type: 'text',
  onChange: () => {},
  required: false,
};

export default DropDown;
