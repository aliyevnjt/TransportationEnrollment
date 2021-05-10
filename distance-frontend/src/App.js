import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import FreeReg from './components/FreeReg';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import RegistrationFormStatic from './components/RegistrationFormStatic';
import AddressBox from './components/toolbox/AddressBox';
import PaidReg from './components/PaidReg';
import NotFound from './components/NotFound';
import { ProvideAuth, PrivateRoute } from './components/Authorization';

function App() {
  // TODO use auth or something else rather than sharing the state with other components

  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/" exact component={RegistrationForm} />
          <Route path="/freereg" component={FreeReg} />
          <Route path="/paidreg" component={PaidReg} />
          <PrivateRoute path="/admin">
            <AdminPanel />
          </PrivateRoute>
          <Route path="/login" component={AdminLogin} />
          <Route path="/regStatic" component={RegistrationFormStatic} />
          <Route path="/address" component={AddressBox} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
export default App;
