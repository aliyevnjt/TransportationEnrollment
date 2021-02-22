import React, { useState, useEffect, Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import 'materialize-css';
import axios from 'axios';
import { appUrl, grades, schools } from '../data/Data';

const api = axios.create({
  baseURL: `${appUrl.baseline}/student/request`,
});
const list = [];
class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        fname: '',
        lname: '',
        grade: '',
        school: '',
        enrollmentStatus: '',
      },
      tableContent: [],
      res: [],
    };
  }

  componentDidMount() {
    console.log(M);
    M.AutoInit();
  }

  changeHandler = async (e) => {
    this.setState({ request: { [e.target.id]: e.target.value } });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      const data = await api.post('/', this.state.request);
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
      <table className="highlight">
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
              <td>{`${li.fname} ${li.lname}`}</td>
              <td>{li.grade}</td>
              <td>
                {schools.filter((sch) => sch.value === li.school)[0].label}
              </td>
              <td>{`${li.address}, ${li.city}`}</td>
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
      <div className="col s9">

        <div className="row left-align">
          <div className="col s10">
            <p className="flow-text">Please pick at least one field.</p>
          </div>
        </div>
        <form className="col s9" onSubmit={this.submitHandler}>
          <div className="row center-align">
            <div className="col input-field s3">
              <input
                id="fname"
                type="text"
                value={fname}
                onChange={this.changeHandler}
              />
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col input-field s3">
              <input
                id="lname"
                type="text"
                value={lname}
                onChange={this.changeHandler}
              />
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col input-field s3">
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
          <div className="row">
            <div className="col input-field s6">
              <select id="grade" value={grade} onChange={this.changeHandler}>
                <option value="">Choose Grade</option>

                {grades.map((gr) => (
                  <option value={gr.value}>{gr.label}</option>
                ))}
              </select>
            </div>
            <div className="col input-field s6">
              <select id="school" value={school} onChange={this.changeHandler}>
                <option value="">Choose School</option>

                {schools.map((sch) => (
                  <option value={sch.value}>{sch.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary">
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
