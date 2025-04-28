import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="/" className='text-light fw-bold'>Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ex1" className='text-light'>Example1</Nav.Link>
            <Nav.Link href="/ex2" className='text-light'>Example2</Nav.Link>
            <Nav.Link href="/ex3" className='text-light'>Example3</Nav.Link>
            <Nav.Link href="/ex4" className='text-light'>Example4</Nav.Link>
          </Nav>
          {/* <a href='/ex2' className="btn btn-light">Example2</a> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;