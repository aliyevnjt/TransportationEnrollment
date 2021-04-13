import React from 'react';
import {
  Nav, Navbar, Container, Jumbotron,
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AdminSearch from './AdminSearch';
import AdminSettings from './AdminSettings';
import AdminAddressUpload from './AdminAddressUpload';
import AdminStudentEntry from './AdminStudentEntry';
import AdminLogin from './AdminLogin';

function AdminPanel() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Transportation Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
        </Navbar.Collapse>
        <Navbar.Brand>
          <img
            // src="../../public/?"
            src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg"
            width="300"
            height="65"
            className="d-inline-block right-aligned align-top"
            alt="Littleton Public Schools"
          />
        </Navbar.Brand>
      </Navbar>
      <Jumbotron fluid>
        <Container>
          <Switch>
            <Route path="/admin" exact component={AdminLogin} />
            <Route path="/admin/search" component={AdminSearch} />
            <Route path="/admin/settings" component={AdminSettings} />
            <Route path="/admin/addressUpload" component={AdminAddressUpload} />
            <Route path="/admin/studentEntry" component={AdminStudentEntry} />
          </Switch>
        </Container>
      </Jumbotron>
    </Router>
  );
}
export default AdminPanel;
