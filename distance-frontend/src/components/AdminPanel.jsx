import React from 'react';
import {
  Nav, Navbar, Container, Jumbotron
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AdminSearch from './AdminSearch';
import AdminSettings from './AdminSettings';
import AdminAddressUpload from './AdminAddressUpload';
import AdminStudentEntry from './AdminStudentEntry';
import LogoutHooks from './LogoutHooks';
import { useAuth } from './Authorization';

const AdminPanel = () => {
  const auth = useAuth();
  return (
    <Router>
      <Route>
        <Navbar bg="dark" expand="md" variant="dark" sticky="top">
          <Navbar.Brand>Transportation Admin</Navbar.Brand>
          <Nav className="mr-auto navbar-fixed-top">
            <LinkContainer to="/admin/search">
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/settings">
              <Nav.Link>Settings</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/addressUpload">
              <Nav.Link>Address Upload</Nav.Link>
            </LinkContainer>
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
                    <h1>
                      Welcome to
                      <br />
                      Transport Enrollment Admin Panel
                    </h1>
                    <h3>
                      Name:
                      {' '}
                      {auth.user.firstName} {auth.user.lastName}
                      <br />
                      Email:
                      {' '}
                      {auth.user.email}
                    </h3>
                  </div>
                )}
              />
              <Route path="/admin/search" component={AdminSearch} />
              <Route path="/admin/settings" component={AdminSettings} />
              <Route path="/admin/addressUpload" component={AdminAddressUpload} />
              <Route path="/admin/studentEntry" component={AdminStudentEntry} />
            </Switch>
          </Container>
        </Jumbotron>
      </Route>
    </Router>
  );
};
export default AdminPanel;
