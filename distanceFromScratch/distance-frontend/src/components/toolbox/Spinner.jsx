import React, { memo } from "react";
import PropTypes from "prop-types";

const Spinner = memo((props) => {
  return (
    <div>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <div>{props.message}</div>
    </div>
  );
});

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
