import React from "react";
import style from './menu.module.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="" bg="dark" variant="dark" className={style.navbar} >
      <Navbar.Brand href="/">
        
        My  Project
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
