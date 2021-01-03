import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class PaymentPage extends Component {
  render() {
    return (
      <div class="container">
        <div class="row center-align">
          <div class="col s12">
            <h2 class="indigo-text darken-4 center-align">
              This is a payment page.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
