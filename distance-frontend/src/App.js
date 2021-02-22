import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import FreeReg from './components/FreeReg';
import AdminPanel from './components/AdminPanel';

function App() {
  useEffect(() => {
  // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div>
      <Header />
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
