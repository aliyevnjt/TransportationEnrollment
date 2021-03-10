import React from 'react';
import {
  Nav, Navbar, Container, Jumbotron,
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AdminSearch from './AdminSearch';
import AdminSettings from './AdminSettings';
import AdminUpload from './AdminUpload';
import Demo from './Demo';

function AdminPanel() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Transportation Admin</Navbar.Brand>
        <Nav className="mr-auto navbar-fixed-top">
          <LinkContainer to="/admin">
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/settings">
            <Nav.Link>Settings</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/fileUpload">
            <Nav.Link>File Upload</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/demo">
            <Nav.Link>Demo</Nav.Link>
          </LinkContainer>
        </Nav>
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
            <Route path="/admin/" exact component={AdminSearch} />
            <Route path="/admin/settings" component={AdminSettings} />
            <Route path="/admin/fileUpload" component={AdminUpload} />
            <Route path="/admin/demo" component={Demo} />
          </Switch>
        </Container>
      </Jumbotron>
    </Router>
  );
}
export default AdminPanel;
