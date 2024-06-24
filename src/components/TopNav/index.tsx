import './topnav.scss';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';

import logo from '../../assets/images/react.svg';

interface TopNavProps {
  toggleSidebar: () => void;
}

const TopNav = ({ toggleSidebar = () => {} }: TopNavProps) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-1 shadow z-index-100">
      <Container fluid className="p-0">
        <Navbar.Toggle onClick={toggleSidebar}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Brand href="/" className="d-flex ps-2 align-items-center">
          <img src={logo} alt="console logo" className="pe-2" /> React Boilerplate App
        </Navbar.Brand>
        <Nav className="ms-auto me-2">
          <NavDropdown
            title={
              <>
                <HiUserCircle className="nav-user-logo m-0 pe-1" />
                <span className="d-none d-md-inline">John Smith</span>
              </>
            }
            id="dropdownMenu"
            align="end"
          >
            <NavDropdown.Item href="/console/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {}}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
