import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { schools, grades } from "./Data";
import M from "materialize-css/dist/js/materialize.min.js";
import { Redirect } from "react-router-dom";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      mName: "",
      grade: "",
      school: "",
      address: "",
      unit: "",
      city: "",
      state: "",
      zip: "",
      parentName: "",
      parentEmailAddress: "",
      parentPhoneNumber: "",
      resp: [],
    };
  }

  submitHandler = (e) => {
    console.log("button works");
    this.props.history.push("/test2", {
      params: {
        student: "new student",
      },
    });
    // <Redirect
    //   push
    //   to="/test2"
    //   // {{
    //   //   pathname: "/test2",
    //   //   state: { student: "Nice Student" },
    //   // }}
    // />;
  };

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount() {
    console.log(M);
    M.AutoInit();
  }

  schoolChoises(e) {
    let val = e.target.value;
    let level = grades.filter((gr) => gr.value === val);
    console.log(level[0].level);
  }

  render() {
    let option = [];
    return (
      <div class="container">
        <p class="flow-text">This is a test page</p>
        <div class="row">
          <div class="input-field col s8">
            <select id="school" required onChange={this.changeHandler}>
              <option value="">Choose School</option>
              {schools.map((sch) => (
                <option value={sch.value}>{sch.label}</option>
              ))}
            </select>
            <label for="school">School</label>
          </div>
          <div class="input-field col s4">
            <select
              id="grade"
              required
              onChange={(e) => {
                this.changeHandler(e);
                this.schoolChoises(e);
              }}
              required
            >
              <option value="">Choose Grade</option>

              {grades.map((gr) => (
                <option value={gr.value}>{gr.label}</option>
              ))}
            </select>
            <label for="grade">* Grade</label>
          </div>
        </div>
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

export default Test;
