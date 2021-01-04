import React, { Component } from "react";
import "./App.css";
import CreateStudentData from "./components/CreateStudentData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";
import FreeEnrollment from "./components/FreeEnrollment";
import PaymentPage from "./components/PaymentPage";

class App extends Component {
  render() {
    return (
      // <div>Hello</div>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={CreateStudentData} />
            <Route path="/errmsg" component={ErrorMessage} />
            <Route path="/freeReg" component={FreeEnrollment} />
            <Route path="/payment" component={PaymentPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
