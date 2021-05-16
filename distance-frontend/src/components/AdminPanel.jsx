import React from 'react';
import { Nav, Navbar, Container, Jumbotron, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AdminSearch from './AdminSearch';
import AdminSettings from './AdminSettings';
import AdminAddressUpload from './AdminAddressUpload';
import AdminStudentEntry from './AdminStudentEntry';
import LogoutHooks from './LogoutHooks';
import { useAuth } from './Authorization';
import Header from './Header';
import './toolbox/littleton.css';
import flowlystLogo from '../data/flowlyst.png';

const AdminPanel = () => {
  const auth = useAuth();
  return (
    <Router>
      <Route>
        <Navbar
          className="littleton-head-bg"
          expand="md"
          variant="dark"
          sticky="top">
          <Navbar.Brand className="img-container">
            <Image src={flowlystLogo} rounded className="logo-small mr-2" />
            Littleton Admin
          </Navbar.Brand>
          <Nav className="mr-auto navbar-fixed-top">
            <LinkContainer to="/admin/search">
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/settings">
              <Nav.Link>Settings</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/admin/addressUpload">
              <Nav.Link>Address Upload</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/admin/studentEntry">
              <Nav.Link>Student Entry</Nav.Link>
            </LinkContainer>
          </Nav>
          <LogoutHooks />
        </Navbar>
        <Jumbotron fluid>
          <Container>
            <Switch>
              <Route
                path="/admin"
                exact
                render={() => (
                  <div>
                    <h3>Dashboard</h3>
                    <h5>
                      Please use the navigation bar to navigate to admin pages.
                      {/* Name: {auth.user.firstName} {auth.user.lastName}
                      <br />
                      Email: {auth.user.email} */}
                    </h5>
                  </div>
                )}
              />
              <Route path="/admin/search" component={AdminSearch} />
              <Route path="/admin/settings" component={AdminSettings} />
              {/* <Route
                path="/admin/addressUpload"
                component={AdminAddressUpload}
              /> */}
              <Route path="/admin/studentEntry" component={AdminStudentEntry} />
            </Switch>
          </Container>
        </Jumbotron>
      </Route>
    </Router>
  );
};
export default AdminPanel;
