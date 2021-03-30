import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import FreeReg from './components/FreeReg';
import AdminPanel from './components/AdminPanel';
import regFormFromExcelAddress from './components/RegFormFromExcelAddress';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={RegistrationForm} />
          <Route path="/freereg" component={FreeReg} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/regStatic" component={regFormFromExcelAddress} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
