import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/submit",
});

class FreeEnrollment extends Component {
  render() {
    return (
      <div class="container">
        <p class="flow-text">
          Thank you for enrolling to our transportation program. You will be
          contacted by one our team members regarding further details.
        </p>
      </div>
    );
  }
}

export default FreeEnrollment;
