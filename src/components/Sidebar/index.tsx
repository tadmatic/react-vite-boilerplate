import './sidebar.scss';

import { Nav, NavItem, NavLink, Offcanvas } from 'react-bootstrap';
import { FiHome, FiLayers, FiSettings, FiUsers } from 'react-icons/fi';

interface SidebarProps {
  showOffCanvas?: boolean;
  onHide: () => void;
}

const Sidebar = ({ showOffCanvas = false, onHide = () => {} }: SidebarProps) => {
  const sidebarItems = [
    { title: 'Home', path: '/', icon: <FiHome /> },
    { title: 'Applications', path: '/applications', icon: <FiLayers /> },
    { title: 'Users', path: '/users', icon: <FiUsers /> },
    { title: 'Settings', path: '/settings', icon: <FiSettings /> },
  ];

  const sidebarList = (
    <>
      {sidebarItems.map((item, i) => (
        <NavItem key={i}>
          <NavLink href={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        </NavItem>
      ))}
    </>
  );

  return (
    <>
      <Offcanvas show={showOffCanvas} onHide={onHide}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="sidebar">
          <Nav className="pt-0">{sidebarList}</Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Nav className="sidebar d-none d-lg-block bg-light flex-column">
        <Nav className="pt-4">{sidebarList}</Nav>
      </Nav>
    </>
  );
};

export default Sidebar;
