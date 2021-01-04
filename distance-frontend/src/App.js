import React, { Component } from "react"
import './App.css';
import CreateStudentData from "./components/CreateStudentData";
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import FreeEnrollment from './components/FreeEnrollment'
import ErrorMessage from './components/ErrorMessage'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">  
        {/* <CreateStudentData /> */}
        <Route path="/" exact render = {
          () => {return (<CreateStudentData />);}
        } />
        <Route path="/student" exact render = {
          () => {return (<CreateStudentData />);}
        } />
        <Route path="/submit" exact render = {
          () => {return (<FreeEnrollment />);}
        } />
        <Route path="/error" exact render = {
          () => {return (<ErrorMessage />);}
        } />
      </div>
      </Router>
    );
  }
}

export default App;
