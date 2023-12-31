import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function Header(props) {
  const router = useNavigate();
  function handleLogin() {
    router('/');
  }
  function handleRegister() {
    router('/register');
  }
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <big>Precious Purse</big>
        </Navbar.Brand>
        <Button variant="light" onClick={() => props.handleShow(false)} style={{ marginTop: '4px'}}>Home</Button>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">    
          </Nav>
          <Button variant="light" onClick={handleLogin} style={{marginRight: '2px'}}>Login</Button>
          <Button variant="light" onClick={handleRegister} style={{marginRight: '2px'}}>Register</Button>
          <Nav>
            <div
              className="nav-link"
              onClick={() => props.handleShow(true)}
            >
             <b><Cart size={20} /><sup>{props.count}</sup></b>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

