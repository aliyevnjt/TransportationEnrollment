import React, { Component } from "react"
import './App.css';
import CreateStudentData from "./components/CreateStudentData";

class App extends Component {
  render() {
    return (
      <div className="App">  
        <CreateStudentData />
      </div>
    );
  }
}

export default App;
