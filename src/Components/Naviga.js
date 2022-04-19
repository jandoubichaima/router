import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Naviga() {
  return (
    <div>
   
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>
          <Link to="/Home">Home</Link>
      </Nav.Link>
      <Nav.Link ><Link to="/Description">Description</Link></Nav.Link>
      <Nav.Link ><Link to="/Movies">Movies</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
    </div>
  )
}

export default Naviga