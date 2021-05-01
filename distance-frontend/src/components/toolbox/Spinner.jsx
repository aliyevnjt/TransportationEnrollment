import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Spinner = memo((props) => (
  <div>
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
    <div>{props.message}</div>
  </div>
));

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
