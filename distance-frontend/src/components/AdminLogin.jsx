import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';
import { useAuth } from './Authorization';
import { refreshTokenSetup } from './toolbox/RefreshToken';
import axios from 'axios';

function AdminLogin() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const baseURL = process.env.REACT_APP_BASE_URL;

  // TODO see if you can do this in down stream
  const { from } = location.state || { from: { pathname: '/' } };
  const login = (googleProfile) => {
    history.replace(from);
    auth.signin(googleProfile);
  };
  // FIXME this is run twice when page loads
  console.log('LOGIN', login);
  const onSuccess = async (googleRes) => {
    // TODO  We want to use this information to log a user into our own back-end,
    //  so the next step is to send the ID token to our own API:
    console.log(googleRes.tokenId);
    const serverRes = await axios.post(`${baseURL}/googleAuth`, {
      tokenId: googleRes.tokenId,
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID
    });

    console.log('serverRes:', serverRes);
    if (serverRes.data) {
      console.log('Login Success: googleRes:', googleRes);
      // alert(
      //   `Logged in successfully welcome ${googleProfile.name} \nSee console for full profile object.`,
      // );
      const userData = serverRes.data;
      userData.imageUrl = googleRes.profileObj.imageUrl;
      console.log('Login Success: currentUser:', userData);
      login(userData);
      refreshTokenSetup(googleRes);
    } else {
      alert('Failed to login. Please check with admin.');
      history.push('/login');
    }

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert('Failed to login. Please check with admin.');
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    cookiePolicy: 'single_host_origin',
    isSignedIn: true,
    accessType: 'offline'
    // responseType: 'code',
    // prompt: 'consent',
  });
  return (
    <div>
      <img
        src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg"
        width="300"
        height="65"
        className="d-inline-block right-aligned align-top"
        alt="Littleton Public Schools"
      />
      <h1>
        Welcome to Littleton Public Schools
      </h1>
      <h2>
        Please login with your school email address to access Transport Enrollment Admin Panel.
      </h2>
      <GoogleButton onClick={() => signIn()} />
    </div>
  );
}
export default AdminLogin;
