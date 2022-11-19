import React from 'react'
import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="#">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Manage</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Header;