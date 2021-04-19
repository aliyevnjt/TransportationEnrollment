import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';
import { useAuth } from './Authorization';
import { refreshTokenSetup } from './toolbox/RefreshToken';

const clientId = '199680818186-hej6rlkb9hbh1n5csgoqjhlalo2lfte0.apps.googleusercontent.com';

function AdminLogin() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  // TODO see if you can do this in down stream
  const { from } = location.state || { from: { pathname: '/' } };
  const login = (googleProfile) => {
    history.replace(from);
    auth.signin(googleProfile);
  };
    // const { userName, setUserName } = useState('');
    // const { userEmail, setUserEmail } = useState('');
    // const { userImgUrl, setUserImgUrl } = useState('');
  console.log('LOGIN', login);
  const onSuccess = async (googleRes) => {
    const googleProfile = googleRes.profileObj;
    console.log('Login Success: currentUser:', googleProfile);
    // alert(
    //   `Logged in successfully welcome ${googleProfile.name} \nSee console for full profile object.`,
    // );
    login(googleProfile);
    refreshTokenSetup(googleRes);
    // setUserName(googleProfile.name);
    // setUserEmail(googleProfile.email);
    // setUserImgUrl(googleProfile.imageUrl);

    // We want to use this information to log a user into our own back-end,
    // so the next step is to send the ID token to our own API:
    // TODO
    // const serverRes = await fetch('/api/googleAuth', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: googleRes.tokenId,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const data = await serverRes.json();
    // store returned user somehow
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    // alert("Failed to login. Please check with admin.");
  };
  console.log('CLIENT ID:', clientId);
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    cookiePolicy: 'single_host_origin',
    isSignedIn: true,
    accessType: 'offline',
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
      {/* <GoogleLogin */}
      {/*    clientId={clientId} */}
      {/*    buttonText="Login" */}
      {/*    onSuccess={onSuccess} */}
      {/*    onFailure={onFailure} */}
      {/* /> */}
      {/* <GoogleLogin */}
      {/*  clientId={clientId} */}
      {/*  render={(renderProps) => ( */}
      {/*    <GoogleButton */}
      {/*      onClick={renderProps.signIn} */}
      {/*      disabled={renderProps.disabled} */}
      {/*    > */}
      {/*      Sign in with Google */}
      {/*    </GoogleButton> */}
      {/*  )} */}
      {/*  onSuccess={onSuccess} */}
      {/*  onFailure={onFailure} */}
      {/*    // cookiePolicy={'single_host_origin'} */}
      {/* /> */}
    </div>
  );
}
export default AdminLogin;
