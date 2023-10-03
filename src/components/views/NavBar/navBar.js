import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded d-flex justify-content-between align-items-center py-2">
      <h4 style={{ marginLeft: '20px' }}>Blog.app</h4>
      <Nav style={{ marginRight: '20px' }} className="d-flex mr-3">
        <Nav.Link as={NavLink} to="/" className="mr-2">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="mr-2">About</Nav.Link>
        <Nav.Link as={NavLink} to="/categories" className="mr-2">Categories</Nav.Link> {/* Dodany link do kategorii */}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
