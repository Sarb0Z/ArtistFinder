import { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "../Styles/bands.svg"

const Header = (props) => {

  const {setToday, setUpcoming, setDate} = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">
          <img src={logo} width="120" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setToday(true)}>
              Today
            </Nav.Link>
            <Nav.Link onClick={()=>setUpcoming(true)}>
              Upcoming
            </Nav.Link>
            <NavDropdown title="Choose Date" id="basic-nav-dropdown">
              <NavDropdown.Item>
                Choose Date
                <Calendar onChange={setDate}/>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Pick Range</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
