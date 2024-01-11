import React, { useContext } from 'react'
import { Navbar, Container, NavDropdown, Nav, Image } from 'react-bootstrap'
import './Header.css'
import logo from '../../Images/logo.png';
import { AppContext } from '../../Contexts/Context';

const Header = () => {
    const context = useContext(AppContext);
    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark" className='navbar-scroll'>
                <Container>
                    <Navbar.Brand href="/"><Image src={logo} alt='' rounded /></Navbar.Brand>
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
                                <NavDropdown.Item href={`/educations/${context.edu[0].Id}`}>{context.edu[0].Name}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href={`/educations/${context.edu[1].Id}`}>
                                    {context.edu[1].Name}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href={`/educations/${context.edu[2].Id}`}>
                                    {context.edu[2].Name}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href={`/educations/${context.edu[3].Id}`}>
                                    {context.edu[3].Name}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='nav-underline' href='/instructors'>Eğitmenlerimiz</Nav.Link>
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