import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '199680818186-hej6rlkb9hbh1n5csgoqjhlalo2lfte0.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon" />
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;
