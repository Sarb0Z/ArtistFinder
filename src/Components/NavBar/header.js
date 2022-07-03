import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Header = () => {
  const [today, setToday]=useState(false);
  const [upcoming, setUpcoming]=useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Find Artists!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item value={today} onClick={setToday}>Today</Nav.Item>
              <Nav.Item value={upcoming} onClick={setUpcoming}>Upcoming</Nav.Item>
            <NavDropdown title="Choose Date" id="basic-nav-dropdown">
              <NavDropdown.Item >
                Choose Date
                <Calendar onChange={setDate} value={date} />
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
