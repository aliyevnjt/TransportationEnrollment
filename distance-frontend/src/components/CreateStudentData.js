import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import {grades, schools} from './Data'

class CreateStudentData extends Component {
    componentDidMount(){
        console.log(M);
        M.AutoInit();
        // document.addEventListener('DOMContentLoaded', function(){
        //     var textNeedCount = document.querySelectorAll('#zip');
        //     M.CharacterCounter.init(textNeedCount);
        // })
    }
    constructor(props) {
      super(props)
    
      this.state = {
         fname:'',
         lname:'',
         mname:'',
         grade:'',
         school:'',
         address:'',
         unit:'',
         city:'',
         state:'MA',
         zip:'',
         pname:'',
         pemail:'',
         p_phone:'',
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
        const {fname, mname, lname, grade, school, address,unit, city, state, zip, pname, pemail, p_phone, homeless} = this.state
        
        
        return (
            <div>
            <div class="container">
                <div class="row center-align">
                    <div class="col s12">
                        <img width="450" src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg" /> 
                        <h1 class="indigo-text darken-4 center-align">Transportation Form</h1>
                    </div>
                </div>    

 
                    
                <form class="col s12" onSubmit={this.submitHandler}>
                    <div class="row">
                        <div class="input-field col s6">
                            <input class="validate" id="fname" type="text" required value={fname} onChange={this.changeHandler}/>
                            <label for="fname">* First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input class="validate" id="mname" type="text" value={mname} onChange={this.changeHandler}/>
                            <label for="mname">Middle Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input class="validate" id="lname" type="text" required value={lname} onChange={this.changeHandler}/>
                            <label for="lname">* Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4">
                            <select id="grade" required value={grade} onChange={this.changeHandler}>
                                {grades.map((gr)=> (
                                    <option value={gr.value}>
                                        {gr.label}
                                    </option>
                                ))}
                            </select>
                            <label for="grade">Grade</label>
                        </div>
                        <div class="input-field col s8">
                            <select id="school" required value={school} onChange={this.changeHandler}>
                                {schools.map((sch)=> (
                                    <option value={sch.value}>
                                        {sch.label}
                                    </option>
                                ))}
                            </select>    
                            <label for="school">School</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s10">
                            <input class="validate" id="address" type="text" required value={address} onChange={this.changeHandler}/>
                            <label for="address">* Address</label>  
                        </div>
                        <div class="input-field col s2">
                            <input class="validate" id="unit" type="text" value={unit} onChange={this.changeHandler}/>
                            <label for="unit">Unit/Apt</label>  
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4">
                            <input class="validate" id="city" type="text" required value={city} onChange={this.changeHandler}/>
                            <label for="city">* City</label>  
                        </div>
                        <div class="input-field col s4">
                            <select id="state" required value={state} onChange={this.changeHandler}>
                                <option value="" disabled selected>Choose State</option>
                                <option value="MA"> MA </option>
                            </select>    
                            <label for="state">* State</label>
                        </div>
                        <div class="input-field col s4">
                            <input class="validate" id="zip" type="text" data-length="10" value={zip} onChange={this.changeHandler}/>
                            <label for="zip">* Zip Code</label>  
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4">
                            <input class="validate" id="pname" type="text" required value={pname} onChange={this.changeHandler}/>
                            <label for="pname">* Parent Name</label>  
                        </div>
                        <div class="input-field col s4">
                            <input class="validate" id="pemail" type="email" required value={pemail} onChange={this.changeHandler}/>
                            <label for="pemail">* Parent Email</label>  
                        </div>
                        <div class="input-field col s4">
                            <input class="validate" id="p_phone" type="tel" required value={p_phone} onChange={this.changeHandler}/>
                            <label for="p_phone">* Parent Phone</label>  
                        </div>
                    </div>
                    <button type="submit"  class="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

export default CreateStudentData;