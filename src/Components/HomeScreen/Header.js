import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegUser } from 'react-icons/fa';

class Header extends Component {
    render() {
     

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="top">
                <Navbar.Brand href="#home">Shopcart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <FaRegUser color ="white" style={{justiftyContent:"center", alignItems:"center"}}/>
                    <Nav>
                        <Nav.Link  href="#deets">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            SignUp
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;