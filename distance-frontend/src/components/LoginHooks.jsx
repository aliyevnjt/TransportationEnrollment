import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';
import { refreshTokenSetup } from './toolbox/RefreshToken';

const clientId = '199680818186-hej6rlkb9hbh1n5csgoqjhlalo2lfte0.apps.googleusercontent.com';

function LoginHooks() {
  const { userName, setUserName } = useState('');
  const { userEmail, setUSerEmail } = useState('');
  const { userImgUrl, setUserImgUrl } = useState('');

  const onSuccess = async (googleRes) => {
    console.log('Login Success: currentUser:', googleRes.profileObj);
    // alert(
    // Logged in successfully welcome ${res.profileObj.name} \nSee console for full profile object.`
    // );
    refreshTokenSetup(googleRes);
    setUserName(googleRes.profileObj.name);
    setUSerEmail(googleRes.profileObj.email);
    setUserImgUrl(googleRes.profileObj.imageUrl);

    // We want to use this information to log a user into our own back-end,
    // so the next step is to send the ID token to our own API:
    const serverRes = await fetch('/api/googleAuth', {
      method: 'POST',
      body: JSON.stringify({
        token: googleRes.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await serverRes.json();
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
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div>
      <GoogleButton onClick={() => signIn()} />
    </div>
  );
}

export default LoginHooks;
