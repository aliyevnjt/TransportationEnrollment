import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm'
import M from "materialize-css/dist/js/materialize.min.js";
import Header from './components/Header'
import FreeReg from './components/FreeReg'


function App() {
  useEffect (()=>{
    M.AutoInit();
  })
  return (
    <div>
      <Header />
      <Router>
        <Switch>
            <Route path="/" exact component={RegistrationForm} />
            <Route path="/freereg" component={FreeReg} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
