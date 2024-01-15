import React, { useContext } from 'react'
import { Navbar, Container, NavDropdown, Nav, Image } from 'react-bootstrap'
import './Header.css'
import logo from '../../Images/logo.png';
import { AppContext } from '../../Contexts/Context';
import { Link, NavLink, } from 'react-router-dom';
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
                            style={{ maxHeight: '400px' }}
                            navbarScroll
                        >
                            <NavLink className='nav-underline nav-link' to="/">Ana Sayfa</NavLink>
                            <NavLink className='nav-underline nav-link' to="/about" >Hakkımızda</NavLink>
                            <NavDropdown title="Eğitimlerimiz" id="navbarScrollingDropdown" data-bs-theme='dark'>
                                <Link className='dropdown-item' to={`/educations/${context.edu[0].Id}`}>{context.edu[0].Name}</Link>
                                <NavDropdown.Divider />
                                <Link className='dropdown-item' to={`/educations/${context.edu[1].Id}`}>
                                    {context.edu[1].Name}
                                </Link>
                                <NavDropdown.Divider />
                                <Link className='dropdown-item' to={`/educations/${context.edu[2].Id}`}>
                                    {context.edu[2].Name}
                                </Link>
                                <NavDropdown.Divider />
                                <Link className='dropdown-item' to={`/educations/${context.edu[3].Id}`}>
                                    {context.edu[3].Name}
                                </Link>
                            </NavDropdown>
                            <NavLink className='nav-underline nav-link' to='/instructors'>Eğitmenlerimiz</NavLink>
                            <NavLink className='nav-underline nav-link' to='/contact'>İletişim</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}

export default Header