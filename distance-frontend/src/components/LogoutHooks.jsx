import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useAuth } from './Authorization';

const clientId = '199680818186-hej6rlkb9hbh1n5csgoqjhlalo2lfte0.apps.googleusercontent.com';

function LogoutHooks() {
  const history = useHistory();
  const auth = useAuth();

  const onLogoutSuccess = () => {
    console.log('Logged out Success');
    // alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };
  // const forceMyOwnLogout = ((response) => {
  //   cookie.remove('MyGoogleID', { path: '/' });
  //   if (window.gapi) {
  //     const auth2 = window.gapi.auth2.getAuthInstance();
  //     if (auth2 != null) {
  //       auth2.signOut().then(
  //         auth2.disconnect().then(onLogoutSuccess),
  //       );
  //     }
  //   }
  //   forceUpdate();
  // });
  const { signOut } = useGoogleLogout({
    clientId,
    cookiePolicy: 'single_host_origin',
    onLogoutSuccess,
    onFailure,
    isSignedIn: false
  });
  const logout = () => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        auth2.signOut().then(
          auth2.disconnect().then(onLogoutSuccess)
        );
      }
    }
    signOut();
    history.push('/');
    console.log('LOGOUT', auth);
    // eslint-disable-next-line react/prop-types
    auth.signout();
  };
  return (
  // FIXME googleLogout does not work properly
  // <GoogleLogout
  //   clientId={clientId}
  //   buttonText="LogOut"
  //   onClick={() => logout()}
  // />
    <Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/admin">
        <img
          src={auth.user.imageUrl}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        {' '}
        Signed in as
        {' '}
        {auth.user.name}
      </Navbar.Brand>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={logout}
      >
        Logout
      </button>
    </Nav>
  );
}
export default LogoutHooks;
