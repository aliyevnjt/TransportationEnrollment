import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class ErrorMessage extends Component {
  render() {
    return (
      <div class="container">
        <div class="row center-align">
          <div class="col s12">
            <h2 class="indigo-text darken-4 center-align">
              There was an error with you submission.
            </h2>
            <h4 class="indigo-text darken-4 center-align">
              Please submit your enrollment one more time.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
