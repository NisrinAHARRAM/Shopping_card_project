import React from 'react'
import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { useShoppingCart } from '../context/ShoppingCartContex';
function Navbar() {
  const {openCart,cartQuantity} = useShoppingCart();
  return (
    // sticky : To stay in the top of the page
      <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'> 
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button 
        onClick={openCart}
          variant="outline-primary" 
          className="rounded-circle"
          style={{position:"relative"}}>
            card
            <div style={{position:"absolute", 
            color:"white",
            width:"1.5rem", 
            height:"1.5rem",
            Button:0,
            right:0,
            transform:"translate(25%,25%)"
          }} className='rounded-circle bg-danger d-flex justify-content-center align-items-center'>
              {cartQuantity}
            </div>
        </Button>
      </Container>
    </NavbarBs>
  )
}

export default Navbar