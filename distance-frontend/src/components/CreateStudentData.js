import React, { Component } from "react";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";
import { grades, schools, appUrl } from "./Data";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

const api = axios.create({
  baseURL: appUrl.baseline + "/student",
});

function errorMessage(statusCode) {
  this.props.history.push("/errmsg");
}

class CreateStudentData extends Component {
  componentDidMount() {
    console.log(M);
    M.AutoInit();
  }
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

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  /** Submit Handler creates a JSON format data from the form and posts it to the API
   * response 201 and free sends it to free enrollment page
   * if 201 and paid redirects to the paid page.
   */
  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(appUrl.baseline);
  //   let res;
  //   try {
  //     res = await api.post("/", this.state);
  //     this.setState({ resp: res });
  //     if (this.state.resp.data.enrollmentStatus === "free") {
  //       console.log(this.state.resp.data.enrollmentStatus);
  //       this.props.history.push({
  //         pathname: "/freeReg",
  //         search: "",
  //         state: { detail: this.state.resp.data },
  //       });
  //     } else this.props.history.push("/payment");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  try {
    const resp = await api.post('/', this.state);
    console.log("hey: " + resp.data.distanceFromSchool)  
    if (resp.data.enrollmentStatus === "free") {
      console.log(resp.data.enrollmentStatus);
      this.props.history.push({pathname: '/freeReg',
                               search: "",
                               state: { detail: this.state.resp.data },
                               student: resp.data
                              })                      
     } else this.props.history.push("/payment");
  } catch (err) {
    console.log(err);
  }
};

  render() {
    const {
      fname,
      mName,
      lname,
      grade,
      school,
      address,
      unit,
      city,
      state,
      zip,
      parentName,
      parentEmailAddress,
      parentPhoneNumber,
      homeless,
    } = this.state;

    return (
      <div>
        <div class="container">
          <form class="col s12" onSubmit={this.submitHandler}>
            <div class="row">
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="fname"
                  type="text"
                  required
                  value={fname}
                  onChange={this.changeHandler}
                />
                <label for="fname">* First Name</label>
              </div>
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="mName"
                  type="text"
                  value={mName}
                  onChange={this.changeHandler}
                />
                <label for="mName">Middle Name</label>
              </div>
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="lname"
                  type="text"
                  required
                  value={lname}
                  onChange={this.changeHandler}
                />
                <label for="lname">* Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <select
                  id="grade"
                  required
                  value={grade}
                  onChange={this.changeHandler}
                  required
                >
                  <option value="">Choose Grade</option>

                  {grades.map((gr) => (
                    <option value={gr.value}>{gr.label}</option>
                  ))}
                </select>
                <label for="grade">* Grade</label>
              </div>
              <div class="input-field col s8">
                <select
                  id="school"
                  required
                  value={school}
                  onChange={this.changeHandler}
                  required
                >
                  <option value="">Choose School</option>

                  {schools.map((sch) => (
                    <option value={sch.value}>{sch.label}</option>
                  ))}
                </select>
                <label for="school">School</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s8">
                <input
                  class="validate"
                  id="address"
                  type="text"
                  required
                  value={address}
                  onChange={this.changeHandler}
                />
                <label for="address">* Address</label>
              </div>
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="unit"
                  type="text"
                  value={unit}
                  onChange={this.changeHandler}
                />
                <label for="unit">Unit/Apt</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="city"
                  type="text"
                  required
                  value={city}
                  onChange={this.changeHandler}
                />
                <label for="city">* City</label>
              </div>
              <div class="input-field col s4">
                <select
                  id="state"
                  required
                  value={state}
                  onChange={this.changeHandler}
                >
                  <option value="" disabled>
                    Choose State
                  </option>
                  <option value="MA"> MA </option>
                </select>
                <label for="state">* State</label>
              </div>
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="zip"
                  type="text"
                  data-length="10"
                  value={zip}
                  onChange={this.changeHandler}
                  required
                />
                <label for="zip">* Zip Code</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="parentName"
                  type="text"
                  required
                  value={parentName}
                  onChange={this.changeHandler}
                />
                <label for="parentName">* Parent Name</label>
              </div>
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="parentEmailAddress"
                  type="email"
                  required
                  value={parentEmailAddress}
                  onChange={this.changeHandler}
                />
                <label for="parentEmailAddress">* Parent Email</label>
              </div>
              <div class="input-field col s4">
                <input
                  class="validate"
                  id="parentPhoneNumber"
                  type="tel"
                  required
                  value={parentPhoneNumber}
                  onChange={this.changeHandler}
                />
                <label for="parentPhoneNumber">* Parent Phone</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateStudentData;