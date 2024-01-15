import React, { useContext } from 'react'
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap'
import { AppContext } from '../../Contexts/Context'
import { Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'


const Hero = () => {
    const context = useContext(AppContext)
    return (
        <>
            <Container className='pt-5 d-flex justify-content-center align-items-center hero'>
                <Card className='py-5 border-0 hero text-light mb-0'>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Card.Title className='display-3 my-5 fw-semibold'>{context.typewriterText}<span className='text-light fw-semibold'><Cursor /></span></Card.Title>
                        <Card.Subtitle className="my-5 text-light display-6">Üniversite onaylı sertifikanı al, lider bilişimci ol.</Card.Subtitle>
                        <Card.Text className='fs-4'>
                            Detaylı bilgi için: <a href="">0212 381 50 00</a>
                        </Card.Text>
                        <ButtonGroup className='mt-5 gap-3'>
                            <Link to="/about"><Button className='rounded-pill fs-5' style={{ width: '140px' }}>Detaylı Bilgi</Button></Link>
                            <Link to="/contact"><Button className='rounded-pill fs-5' style={{ width: '140px' }}>İletişim</Button></Link>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Hero