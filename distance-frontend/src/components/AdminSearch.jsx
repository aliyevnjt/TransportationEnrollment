import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";
import { usa, appUrl, grades, schools } from "./Data";
import axios from "axios";

const api = axios.create({
  baseURL: appUrl.baseline + "/student/request",
});

class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      grade: "",
      school: "",
      enrollmentStatus: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount() {
    console.log(M);
    M.AutoInit();
  }

  submitHandler = async (e) => {
    e.preventDefault();
    console.log("buttonworks");
    try {
      const data = await api.get(this.state);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { fname, lname, grade, school, enrollmentStatus } = this.state;
    return (
      <div class="container">
        <div class="row left-align">
          <div class="col s12">
            <p class="flow-text">Please pick at least one field.</p>
          </div>
        </div>
        <form class="col s12" onSubmit={this.submitHandler}>
          <div class="row center-align">
            <div class="col input-field s4">
              <input
                id="fname"
                type="text"
                value={fname}
                onChange={this.changeHandler}
              />
              <label for="fname">First Name</label>
            </div>
            <div class="col input-field s4">
              <input
                id="lname"
                type="text"
                value={lname}
                onChange={this.changeHandler}
              />
              <label for="lname">Last Name</label>
            </div>
            <div class="col input-field s4">
              <select id="grade" value={grade} onChange={this.changeHandler}>
                <option value="">Free/Paid</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col input-field s6">
              <select id="grade" value={grade} onChange={this.changeHandler}>
                <option value="">Choose Grade</option>

                {grades.map((gr) => (
                  <option value={gr.value}>{gr.label}</option>
                ))}
              </select>
            </div>
            <div class="col input-field s4">
              <select id="school" value={school} onChange={this.changeHandler}>
                <option value="">Choose School</option>

                {schools.map((sch) => (
                  <option value={sch.value}>{sch.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="row">
            <button type="submit" class="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminSearch;
