import React, { Component } from 'react';
import axios from 'axios';
class CreateStudentData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:'',
         lname:'',
         address:''

      };
    };

    changeHandler = e => {
        this.setState({[e.target.id]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
     //   axios.get('http://localhost:8080/student/1')
        axios
            .post('http://localhost:8080/student',this.state)
            .then(response => {
                console.log(response);
            
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        const {fname, lname, address} = this.state
        return (
            <div>
                <div class="container">
                    <img width="650" src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg" class="img-fluid" alt="Responsive Image" /> 
                </div>
                <div class="container">
                    <h1 class="yellow-text text-darken-2 center-align csshook">Transportation Form</h1>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div class="container">
                        <div class="mb-3 row">
                            <label class="col-form-label col-sm-2" for="fname">First Name</label>
                            <div class="col-sm-10">
                                <input class="form-control" placeholder="John" id="fname" type="text" value={fname} onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-form-label col-sm-2" for="lname">Last Name</label>
                            <div class="col-sm-10">
                                <input class="form-control" placeholder="Smith" id="lname" type="text" value={lname} onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-form-label col-sm-2" for="address">Address</label>  
                            <div class="col-sm-10">
                                <input class="form-control" placeholder="123 Main Street Boston MA" id="address" type="text" value={address} onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <select class="form-select form-select-lg" aria-label=".form-select-lg" id="schoolName">
                                    <option value="" disabled selected>Choose school</option>
                                    <option value="LHS"> LITTLETON HIGH SCHOOL </option>
                                    <option value="LMS"> LITTLETON MIDDLE SCHOOL </option>
                                    <option value="RSS"> RUSSELL STREET SCHOOL </option>
                                    <option value="SLS"> SHAKER LANE SCHOOL </option>
                                </select>
                            </div>
                        </div>
                       
                    </div>
                        <button type="submit"  class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateStudentData;