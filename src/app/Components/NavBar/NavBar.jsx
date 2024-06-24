'use client'
import React from 'react'
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
        <div>

            <Navbar expand="lg" className="bg-body-tertiary text-center">
                <Container>
                    <Navbar.Brand href="#"><img src="https://pngimg.com/uploads/nike/nike_PNG11.png" width={100} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" >
                                Contact
                            </Nav.Link>

                        </Nav>
                        <ButtonGroup className='gap-2'>
                            <Button variant="outline-dark">login</Button>
                            <Button variant="outline-dark">signUp</Button>
                        </ButtonGroup>  
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
