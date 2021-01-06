import React, { Component } from "react";
import "./App.css";
import CreateStudentData from "./components/CreateStudentData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";
import FreeEnrollment from "./components/FreeEnrollment";
import PaymentPage from "./components/PaymentPage";
import Test from "./components/test";
import Test2 from "./components/test2";
import SuccessPage from "./components/SuccessPage";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";
import AdminSearch from "./components/AdminSearch";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={CreateStudentData} />
            <Route path="/errmsg" component={ErrorMessage} />
            <Route path="/freeReg" component={FreeEnrollment} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/success" component={SuccessPage} />
            <Route path="/test" component={Test} />
            <Route path="/test2" component={Test2} />
            <Route path="/admin" component={AdminSearch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
