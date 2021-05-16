import React, { useContext, createContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

/** Read more on
 * https://usehooks.com/useAuth/
 */
const authContext = createContext();
// FIXME must use this downstream but causes circular dependency
export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (userData) => {
    setUser(userData);
  };

  const signout = () => {
    setUser(null);
  };
  return {
    user,
    signin,
    signout
  };
}
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
// eslint-disable-next-line react/prop-types
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  // console.log('ProvideAuth, children', children);
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// A wrapper for <Route> that redirects to the login
// page if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  // console.log('PrivateRoute, rest', rest);
  return (
    <Route
      {...rest}
      render={({ location }) => (auth.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location }
          }}
        />
      ))}
    />
  );
}
