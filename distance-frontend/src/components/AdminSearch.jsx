import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";
import { appUrl, grades, schools } from "./Data";
import axios from "axios";

const api = axios.create({
  baseURL: appUrl.baseline + "/student/request",
});
const list = [];
class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        fname: "",
        lname: "",
        grade: "",
        school: "",
        enrollmentStatus: "",
      },
      tableContent: [],
      res: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ request: { [e.target.id]: e.target.value } });
  };

  componentDidMount() {
    console.log(M);
    M.AutoInit();
  }

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      const data = await api.post("/", this.state.request);
      this.setState({ tableContent: this.constructTable(data.data) });
      //     console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  constructTable = (st) => {
    if (st === undefined) {
      return [];
    }
    // console.log(st);
    //  let list = st.map((li) => li.id);
    // let list = st.map((li) => (
    //   <tr key={li.id}>
    //     <td>{li.fname + " " + li.lname}</td>
    //     <td>{li.grade}</td>
    //     <td>{schools.filter((sch) => sch.value === li.school)}</td>
    //     <td>{li.address + ", " + li.city}</td>
    //     <td>{li.distanceFromSchool}</td>
    //     <td>{li.enrollmentStatus}</td>
    //   </tr>
    // ));
    console.log(schools.filter((sch) => sch.value === st[0].school)[0].label);
    return (
      <table class="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>School</th>
            <th>Address</th>
            <th>Distance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {st.map((li) => (
            <tr key={li.id}>
              <td>{li.fname + " " + li.lname}</td>
              <td>{li.grade}</td>
              <td>
                {schools.filter((sch) => sch.value === li.school)[0].label}
              </td>
              <td>{li.address + ", " + li.city}</td>
              <td>{li.distanceFromSchool}</td>
              <td>{li.enrollmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    const {
      fname,
      lname,
      grade,
      school,
      enrollmentStatus,
      tableContent,
      res,
    } = this.state;
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
              <select
                id="enrollmentStatus"
                value={enrollmentStatus}
                onChange={this.changeHandler}
              >
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
            <div class="col input-field s6">
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
        {tableContent}
      </div>
    );
  }
}

export default AdminSearch;
