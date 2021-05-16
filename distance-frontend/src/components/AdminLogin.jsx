import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';
import { useAuth } from './Authorization';
import { refreshTokenSetup } from './toolbox/RefreshToken';
import Header from './Header';
import './toolbox/littleton.css';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AdminLogin() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const baseURL = process.env.REACT_APP_BASE_URL;

  // TODO see if you can do this in down stream
  const { from } = location.state || { from: { pathname: '/admin' } };
  const login = (googleProfile) => {
    history.replace(from);
    auth.signin(googleProfile);
  };
  // FIXME this is run twice when page loads
  //console.log('LOGIN', login);
  const onSuccess = async (googleRes) => {
    // TODO  We want to use this information to log a user into our own back-end,
    //  so the next step is to send the ID token to our own API:
    // console.log(googleRes.tokenId);
    const serverRes = await axios.post(`${baseURL}/googleAuth`, {
      tokenId: googleRes.tokenId,
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });

    //console.log('serverRes:', serverRes);
    if (serverRes.data) {
      //console.log('Login Success: googleRes:', googleRes);
      // alert(
      //   `Logged in successfully welcome ${googleProfile.name} \nSee //console for full profile object.`,
      // );
      const userData = serverRes.data;
      userData.imageUrl = googleRes.profileObj.imageUrl;
      //console.log('Login Success: currentUser:', userData);
      login(userData);
      refreshTokenSetup(googleRes);
    } else {
      alert('Failed to login. Please check with admin.');
      history.push('/login');
    }
  };

  const onFailure = (res) => {
    //console.log('Login failed: res:', res);
    alert('Failed to login. Please check with admin.');
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    cookiePolicy: 'single_host_origin',
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });
  return (
    <div>
      <Header page="admin" />

      <Row className="justify-content-md-center">
        <Col lg="5" md="7" sm="8" xs="12">
          <Card className="text-center" style={{ margin: 'auto' }}>
            <Card.Header as="h4"> Admin Login</Card.Header>
            <Card.Body>
              <h5>
                Please login with your school email address to access Transport
                Enrollment Admin Panel.
              </h5>
              <Row className="justify-content-md-center mt-3">
                <GoogleButton onClick={() => signIn()} />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default AdminLogin;
