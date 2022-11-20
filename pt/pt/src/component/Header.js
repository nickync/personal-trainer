import React from 'react'
import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/trainers">Find Trainers</Nav.Link>
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