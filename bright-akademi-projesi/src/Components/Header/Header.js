import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Image } from 'react-bootstrap'
import './Header.css'
import logo from '../../Images/logo.png';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark" className='navbar-scroll'>
                <Container>
                    <Navbar.Brand href="/"><Image src={logo} alt='' rounded/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0 w-75 justify-content-around "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='nav-underline' href="/">Ana Sayfa</Nav.Link>
                            <Nav.Link className='nav-underline' href="/about" >Hakkımızda</Nav.Link>
                            <NavDropdown title="Eğitimlerimiz" id="navbarScrollingDropdown" data-bs-theme='dark'>
                                <NavDropdown.Item href="/educations/0">Full Stack Programlama Eğitimi</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/educations/1">
                                    Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/educations/2">
                                    Bulut Bilişim Uzmanlık Eğitimi
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/educations/3'>
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