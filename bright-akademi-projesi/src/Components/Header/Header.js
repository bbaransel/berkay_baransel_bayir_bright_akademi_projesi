import React from 'react'
import { Navbar, Container, NavDropdown, Form, Button, Nav, Image } from 'react-bootstrap'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark" className='navbar-scroll'>
                <Container>
                    <Navbar.Brand href="/"><img className='logo-img' src='https://picsum.photos/id/237/50/50' alt="" /></Navbar.Brand>
                    <Navbar.Brand href="/"><Image src='/public/Images/Screenshot_1.png' alt='' rounded className='logo-img' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0 w-75 justify-content-around "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='nav-underline' href="/">Ana Sayfa</Nav.Link>
                            <Nav.Link className='nav-underline' href="/#bau" >Hakkımızda</Nav.Link>
                            <NavDropdown title="Eğitimlerimiz" id="navbarScrollingDropdown" data-bs-theme='dark'>
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
                            <Nav.Link className='nav-underline' href='#action7'>Eğitmenlerimiz</Nav.Link>
                            <Nav.Link className='nav-underline' href='/contact'>İletişim</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex" data-bs-theme="light">
                            <Form.Control
                                type="search"
                                placeholder="A"
                                className=""
                                aria-label="Ara"
                            />
                            <FontAwesomeIcon className='btn-search' icon={faMagnifyingGlass} />
                            <Button variant="primary">Ara</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header