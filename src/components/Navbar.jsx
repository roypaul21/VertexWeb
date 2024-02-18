
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function CollapsibleExample() {
  useEffect(() => {
      Aos.init({
          disable: false,
          startEvent: 'DOMContentLoaded',
          animatedClassName: 'aos-animate',
          offset: 120, 
          delay: 0,
          duration: 300,
          easing: 'ease-in-sine',
          once: true,
      })
  },[])
  return (
    <section data-aos="zoom-in">
    <Navbar collapseOnSelect expand="lg" className="" data-bs-theme="light" >
      <Container>
        <Navbar.Brand href="/"><img
              src="./images/vertex_logo.png"
              width="150"
              height="40"
              className="d-inline-block align-top"
              alt="Yor"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="navbar-section-pages">
            <Nav.Link href="/" >About Us</Nav.Link>
            <NavDropdown title="Business Division" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Reference</Nav.Link>
            <Nav.Link href="/">Why Us?</Nav.Link>
            <Nav.Link href="/">Partners</Nav.Link>
          </Nav>
          <Nav className='navbar-contact-us'>
            <Nav.Link href="/" >Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default CollapsibleExample;