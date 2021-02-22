import React, { useState, useEffect, Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Button from './toolbox/Button';
import InputBox from './toolbox/InputBox';
import Spinner from './toolbox/Spinner';
import DropDown from './toolbox/DropDown';
import {
  states, cities, schools, grades, usa,
} from '../data/Data';
import { studentApi } from '../api/studentApi';
import { sample } from '../data/sample';

class RegistrationForm extends Component {
  // for testing purposes delete after testing
  // freeSample() {
  //   this.setState({
  //     fname: sample.fname,
  //   });
  // }

  componentDidMount() {
    M.AutoInit();
    M.updateTextFields();
  }

  componentDidUpdate() {
    M.AutoInit();
    M.updateTextFields();
  }

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mName: '',
      grade: '',
      school: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      zip: '01460',
      parentName: '',
      parentEmailAddress: '',
      parentPhoneNumber: '',
      gradeOptions: [],
    };
  }

  changeHandler = async (e) => {
    e.preventDefault();
    await this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      const res = await studentApi.post('/student', this.state);
      if (res.data.enrollmentStatus === 'free') {
        this.props.history.push({
          pathname: '/freeReg',
          search: '',
          state: { detail: res.data },
          student: res.data,
        });
      } else {
        this.props.history.push({
          pathname: '/payment',
          search: '',
          state: { detail: res.data },
          student: res.data,
        });
      }
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
      city,
      state,
      zip,
      parentName,
      parentEmailAddress,
      parentPhoneNumber,
    } = this.state;
    return (
      <div>
        <div className="divider" />
        <div className="container">
          <form className="col s12" onSubmit={this.submitHandler}>
            <div className="row">
              <InputBox
                id="fname"
                type="text"
                value={fname}
                onChange={this.changeHandler}
                label="* First Name"
                col="s4"
                required
              />
              <InputBox
                id="mName"
                type="text"
                value={mName}
                onChange={this.changeHandler}
                label="Middle Name"
                col="s4"
              />
              <InputBox
                id="lname"
                type="text"
                value={lname}
                onChange={this.changeHandler}
                label="* Last Name"
                col="s4"
                required
              />
            </div>
            <div className="row">
              <InputBox
                id="address"
                type="text"
                value={address}
                onChange={this.changeHandler}
                label="* Address"
                col="s5"
                required
              />
              <DropDown
                id="city"
                value={city}
                onChange={this.changeHandler}
                label="* City"
                col="s2"
                required
                options={cities}
              />
              <DropDown
                id="state"
                value={state}
                onChange={this.changeHandler}
                label="* State"
                col="s3"
                required
                options={states}
              />
              <InputBox
                id="lname"
                type="text"
                value={zip}
                onChange={this.changeHandler}
                label="* Zip"
                col="s2"
                required
                showLabel
                disabled
              />
            </div>
            <div className="row">
              <DropDown
                id="school"
                value={school}
                onChange={(e) => {
                  this.changeHandler(e);
                  this.setState({
                    gradeOptions: grades.filter(
                      (g) => g.level === e.target.value,
                    ),
                  });
                }}
                label="* School"
                col="s5"
                required
                options={schools}
              />
              <DropDown
                id="grade"
                value={grade}
                onChange={this.changeHandler}
                label="* Grade"
                col="s2"
                required
                options={this.state.gradeOptions}
              />
            </div>
            <div className="row">
              <InputBox
                id="parentName"
                type="text"
                value={parentName}
                onChange={this.changeHandler}
                label="* Parent Full Name"
                col="s4"
                required
              />
              <InputBox
                id="parentEmailAddress"
                type="email"
                value={parentEmailAddress}
                onChange={this.changeHandler}
                label="* Parent Email"
                col="s4"
                required
              />
              <InputBox
                id="parentPhoneNumber"
                type="tel"
                value={parentPhoneNumber}
                onChange={this.changeHandler}
                label="* Parent Phone"
                col="s4"
                required
              />
            </div>
            <Button label="Continue" type="submit" />
          </form>
          <button onClick={this.freeSample}>Free Sample</button>
          <button onClick={this.paidSample}>Paid Sample</button>
          <div />
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
