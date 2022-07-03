import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Header = () => {
  const [flag, setFlag]= useState(false);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Find Artists!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Today</Nav.Link>
            <Nav.Link href="#home">Upcoming</Nav.Link>
            <NavDropdown title="Choose Date" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>setFlag(!flag)}>
                Choose Date
                <Calendar/>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Pick Range
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;