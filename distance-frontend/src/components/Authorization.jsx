import React, { useContext, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Jumbotron } from 'react-bootstrap';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

// First, visit the admin page which is redirected to the login page
// since you're not yet logged in.
// After you login, you are redirected to the protected admin main page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function Authorization() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <AdminLogin />
            </Route>
            <PrivateRoute path="/admin">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

/** Read more on
 * https://usehooks.com/useAuth/
 */
const authContext = createContext();

// To use this downstream but causes circular dependency
export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (googleProfile) => {
    setUser({
      name: googleProfile.name,
      email: googleProfile.email,
      imageUrl: googleProfile.imageUrl,
    });
  };

  const signout = () => {
    setUser(null);
  };

  return {
    user,
    signin,
    signout,
  };
}
// eslint-disable-next-line react/prop-types
function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// A wrapper for <Route> that redirects to the login
// page if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => (auth.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

function ProtectedPage() {
  return (
    <Jumbotron fluid>
      <Container>
        <AdminPanel />
      </Container>
    </Jumbotron>
  );
}

Authorization.propTypes = {
  children: PropTypes.func.isRequired,
};
