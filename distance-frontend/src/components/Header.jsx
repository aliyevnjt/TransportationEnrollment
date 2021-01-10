import React, { Component } from "react";
import { schoolYear as year } from "./Data";
import "materialize-css/dist/css/materialize.min.css";

class Header extends Component {
  render() {
    return (
      <div class="container">
        <div class="row center-align valign-wrapper">
          <div class="col s3">
            <img
              class="responsive-img"
              src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg"
              alt=""
            />
          </div>
          <div class="col s6">
            <h4 class="indigo-text darken-4 center-align">
              Transportation Form
            </h4>
          </div>
          <div class="col s3">
            <h6 class="teal-text darken-4 center-align">School Year: {year}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
