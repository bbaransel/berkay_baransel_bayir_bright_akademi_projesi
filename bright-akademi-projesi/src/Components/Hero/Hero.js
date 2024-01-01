import React from 'react'
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap'

const Hero = () => {
    return (
        <>
            <Container fluid className='py-5 d-flex justify-content-center align-items-center hero'>
                {/* <h1 className='display-4 text-center w-50 m-auto'>Geleceğin Teknolojilerini BAU ile Kodla</h1>
                <p className='text-center w-50 m-auto'>Üniversite onaylı sertifikanı al, lider bilişimci ol.</p> */}
                <Card className='p-5 border-0 hero text-light'>
                    {/* style={{ width: '50rem' }} */}
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Card.Title className='display-2 my-5'>Geleceğin Teknolojilerini BAU ile Kodla</Card.Title>
                        <Card.Subtitle className="my-5 text-light display-6">Üniversite onaylı sertifikanı al, lider bilişimci ol.</Card.Subtitle>
                        <Card.Text className='fs-4'>
                            Detaylı bilgi için: <a href="">0212 381 50 00</a>
                        </Card.Text>
                        <ButtonGroup className='d-flex justify-content-around w-50 my-5'>
                            <Card.Link href="/about"><Button className='rounded-pill fs-5'style={{ width: '140px' }}>Detaylı Bilgi</Button></Card.Link>
                            <Card.Link href="/contact"><Button className='rounded-pill fs-5' style={{ width: '140px' }}>İletişim</Button></Card.Link>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Hero