import React, {useEffect, useState} from 'react';
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
import axios from 'axios';
import {baseURL} from './data/Data';

function App() {
  // TODO use auth or something else rather than sharing the state with other components
  const [adminYear, setAdminYear] = useState();
  useEffect(() => {
    async function fetchData() {
      // FETCH all admin settings to get current year
      const res = await axios.get(`${baseURL}/adminSettings`);
      const currentData = res.data.filter((obj) => obj.activeInd === 'Y');
      console.log(currentData[0]);
      setAdminYear(currentData[0].adminYear);
    }
    fetchData();
  }, []);

  // this change to share adminYear state is not satisfying
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/" exact render={ (props) =>
            (<RegistrationForm {...props} adminYear={adminYear} />)
          }/>
          <Route path="/freereg" render={(props) =>
            (<FreeReg {...props} adminYear={adminYear}/>)
          }/>
          <Route path="/paidreg" render={(props) =>
            (<PaidReg {...props} adminYear={adminYear}/>)
          }/>
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
