import React from 'react'
import { Navbar, Container, NavDropdown, Form, Button, Nav } from 'react-bootstrap'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" bg='primary' data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Bright Akademi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0 w-50 justify-content-around "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Ana Sayfa</Nav.Link>
                            <Nav.Link href="#action2">Hakkımızda</Nav.Link>
                            <NavDropdown title="Eğitimlerimiz" id="navbarScrollingDropdown" data-bs-theme='light'>
                                <NavDropdown.Item href="#action3">Full Stack Programlama Eğitimi</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Bulut Bilişim Uzmanlık Eğitimi
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='#action6'>
                                    Full Data Uzmanlık Eğitimi
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='#action7'>Eğitmenlerimiz</Nav.Link>
                        </Nav>
                        <Form className="d-flex" data-bs-theme="light">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className=""
                                aria-label="Search"
                            />
                            <Button variant="primary"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header