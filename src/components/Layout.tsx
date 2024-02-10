import { Outlet } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark ">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white">
            ACQUASOLUTIONS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex text-white footer-icons">
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <XIcon />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
