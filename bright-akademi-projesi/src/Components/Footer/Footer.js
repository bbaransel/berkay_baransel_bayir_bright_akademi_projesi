import React from 'react'
import { Button, ButtonGroup, Container, Image } from 'react-bootstrap'
import './Footer.css';
import logo from '../../Images/logo.png';
const Footer = () => {
    return (
        <>
            <Container className='footer text-center m-0 p-0 text-light' fluid>
                <div className="footer-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <Container className='m-0 p-3 footer-container d-flex flex-column justfiy-content-center align-items-center' fluid>
                    <Image src={logo} style={{ width: '180px', height: '57' }} className='mb-5' />
                    <ButtonGroup className='mb-1'>
                        <Button variant='light' className='rounded-circle p-1 btn-float' href='https://github.com/bbaransel' target='_blank'><i className="fa-brands fa-github fs-3"></i></Button>
                        <Button variant='light' className='rounded-circle p-1 btn-float' href='https://github.com/bbaransel' target='_blank'><i className="fa-brands fa-linkedin fs-3"></i></Button>
                    </ButtonGroup>
                    <div className='w-25 m-auto pt-3 footer-end'>Copyright &copy; 2023 Berkay Baransel BAYIR. </div>
                </Container>
            </Container>
        </>
    )
}

export default Footer