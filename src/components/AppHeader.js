import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo.jpg'; // Adjust the file extension based on the actual file type
import '../App.css';
//react fontawesome imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const AppHeader = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-light bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" className="logo" />
          HOTOOOO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars}  style= {{color:"#fff"}}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto customNav">
            <Nav.Link className="customNavLink" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="customNavLink" href="#link">
              ABOUT ME
            </Nav.Link>
            <Nav.Link className="customNavLink" href="#home">
              SERVICES
            </Nav.Link>
            <Nav.Link className="customNavLink" href="#link">
              HOW WE WORK
            </Nav.Link>
            <Nav.Link className="customNavLink" href="#home">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className="customNavLink" href="#link">
              CONTACTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
