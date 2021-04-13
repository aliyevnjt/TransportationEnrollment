import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import FreeReg from './components/FreeReg';
import AdminPanel from './components/AdminPanel';
import RegistrationFormStatic from './components/RegistrationFormStatic';
import AddressBox from './components/toolbox/AddressBox';
import PaidReg from './components/PaidReg';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={RegistrationForm} />
          <Route path="/freereg" component={FreeReg} />
          <Route path="/paidreg" component={PaidReg} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/regStatic" component={RegistrationFormStatic} />
          <Route path="/address" component={AddressBox} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
