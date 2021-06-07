import { Navbar, Nav } from "react-bootstrap";

const MyNav = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    className="mb-3 "
  >
    <Navbar.Brand href="#home">
      <img
        src="https://i.pinimg.com/originals/3c/7a/f3/3c7af3c03a1fc34f679d6cb8d1af703a.png"
        style={{ width: 60 + "px" }}
        alt=""
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Homes</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        <Nav.Link href="#features">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default MyNav;
