import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/submit",
});

class FreeEnrollment extends Component {
  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    let res = await api
      .post("/", this.state)

    this.setState({ resp: res });
  };
  
  render() {
    return (
      <div class="container" >
        <p class="flow-text">
          Thank you for for your interest in our transportation program. Please
          click the enroll button to finish your enrollment
        </p>
        <p class="flow-text">
          Please note that your enrollment is not submitted until you submit
          this form.
        </p>
        <button type="submit" class="btn-lg btn-primary" onClick={this.submitHandler}>
          Complete Enrollment
        </button>
      </div>
    );
  }
}

function enroll() {
  console.log({ status: "enroll" });
}

export default FreeEnrollment;
