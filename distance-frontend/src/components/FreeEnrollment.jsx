import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { appUrl } from "./Data";
import { withRouter } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: appUrl.baseline + "/submit",
});

class FreeEnrollment extends Component {
  componentDidMount = () => {
    console.log(this.props.history.location.state);
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { student } = this.props.location;
    console.log(student);
    try {
      console.log(api.post("/", student));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.props.history.location.state === undefined) {
      this.props.history.push("/");
    }
    return (
      <div class="container">
        <p class="flow-text">
          Thank you for for your interest in our transportation program. Please
          click the enroll button to finish your enrollment
        </p>
        <p class="flow-text">
          Please note that your enrollment is not submitted until you submit
          this form. Student Id =
        </p>
        <button
          type="submit"
          class="btn-lg btn-primary"
          onClick={this.submitHandler}
        >
          Complete Enrollment
        </button>
      </div>
    );
  }
}

export default FreeEnrollment;
