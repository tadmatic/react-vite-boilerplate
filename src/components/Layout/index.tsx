import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Footer from '../Footer';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const toggleSidebar = () => setShowOffCanvas(!showOffCanvas);

  return (
    <>
      <TopNav toggleSidebar={toggleSidebar} />
      <div className="d-flex vh-100">
        <Sidebar showOffCanvas={showOffCanvas} onHide={toggleSidebar} />
        <Container fluid className="d-flex flex-column p-4 pb-2">
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Layout;
