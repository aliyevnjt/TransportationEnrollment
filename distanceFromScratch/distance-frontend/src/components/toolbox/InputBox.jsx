import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

const InputBox = (props) => {
  return (
    <div>
      <div className={"input-field col " + props.col}>
        <input
          className="validate"
          validations={props}
          id={props.id}
          type={props.type}
          required={props.required}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        <Label show={props.showLabel} id={props.id} label={props.label} />
      </div>
    </div>
  );
};

InputBox.prototype = {
  // data:PropTypes.arrayOf.isRequired{

  // }
  id: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

InputBox.defaultProps = {
  type: "text",
  onChange: () => {},
  required: false,
  showLabel: true,
  disabled: false,
};

export default InputBox;
