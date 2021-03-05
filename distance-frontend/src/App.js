import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import FreeReg from './components/FreeReg';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={RegistrationForm} />
          <Route path="/freereg" component={FreeReg} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
