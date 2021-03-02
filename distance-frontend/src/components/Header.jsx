import React from 'react';
import { schoolYear as year } from '../data/Data';
import 'materialize-css/dist/css/materialize.min.css';

function Header() {
  return (
    <div>
      <div className="container" style={{ marginTop: '10px' }}>
        <div className="row center-align valign-wrapper">
          <div className="col s3">
            <img
              className="responsive-img"
              src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg"
              alt=""
            />
          </div>
          <div className="col s5" />
          <div className="col s4">
            <h6 className="teal-text darken-4 center-align">
              School Year:
              {' '}
              {year}
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h4 className="indigo-text darken-4 center-align">
              Transportation Form
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
