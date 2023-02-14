import React from 'react'

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'



function NavbarEjemplo() {
  return (
    <>
       <Navbar className='navBg' variant='ligth' expand="lg">
      <Container>
    
        <Navbar.Brand as={Link} to='/'>
            <img src='./logoyugterapias.ico' width='50'/>YUG TERAPIAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/inicio'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/productos'>Productos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/flores'>
                Flores de Bach
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/tarot'>Tarot</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/biodeco'>Bioneurodecodificación</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/cartWidget'>
                <img src='.\carrito-de-compras.png' width='40'/>0</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section>

    </>
  )
}

export default NavbarEjemplo