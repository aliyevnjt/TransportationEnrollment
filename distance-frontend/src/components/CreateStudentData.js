import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

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
        var grades = [
            {label:'Choose Grade',value:''},
            {label:'K',value:'K'},
            {label:'1',value:'1'},
            {label:'2',value:'2'},
            {label:'3',value:'3'},
            {label:'4',value:'4'},
            {label:'5',value:'5'},
            {label:'6',value:'6'},
            {label:'7',value:'7'},
            {label:'8',value:'8'},
            {label:'9',value:'9'},
            {label:'10',value:'10'},
            {label:'11',value:'11'},
            {label:'12',value:'12'}
        ]
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
                            {/* <select id="grade" required value={grade} onChange={this.changeHandler}>
                                {grade.map((gr)=> (
                                    <option value={gr.value}>
                                        {gr.label}
                                    </option>
                                ))}
                            </select> */}
                            <select id="grade" required value={grade} onChange={this.changeHandler}>
                                <option value="" disabled selected>Choose Grade</option>
                                <option value="K">K</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>    
                            <label for="grade">Grade</label>
                        </div>
                        <div class="input-field col s8">
                            <select id="school" required value={school} onChange={this.changeHandler}>
                                <option value="" disabled selected>Choose School</option>
                                <option value="LHS"> LITTLETON HIGH SCHOOL </option>
                                <option value="LMS"> LITTLETON MIDDLE SCHOOL </option>
                                <option value="RSS"> RUSSELL STREET SCHOOL </option>
                                <option value="SLS"> SHAKER LANE SCHOOL </option>
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