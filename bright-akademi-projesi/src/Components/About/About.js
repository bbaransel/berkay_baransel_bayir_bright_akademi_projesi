import React from 'react'
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container fluid>
                <Card className='p-5 border-0 my-5'>
                    <Card.Body>
                        <Card.Title className='display-3 my-5'>BAU Bright Nedir?</Card.Title>
                        <Card.Text className='my-5 fs-4'>
                            Bahçeşehir Üniversitesi tarafından yürütülen ve proje deneyimi yüksek eğitici kadrosu ile fark yaratacak yazılım - sistem uzmanları yetiştiren bir kariyer programıdır. Sektör ihtiyaçları göz önünde bulundurularak hazırlanmış güncel ve son teknoloji eğitim içerikleriyle BAU Bright eğitimleri devam ediyor! Eğitimini tamamlayan adaylar bilişim sektöründe işe yerleştirilmektedir.
                        </Card.Text>
                    </Card.Body>
                    <Button variant='info' className='my-3' href='/about'>Detaylı Bilgi</Button>
                </Card>
                <Row className=''>
                    <Col xl='4'>
                        <Image src="/src/Images/Screenshot_1.png" roundedCircle />
                        <Image src="/src/Images/Screenshot_1.png" />
                        <img src="/src/Images/Screenshot_1.png" alt="asda" />

                    </Col>
                    <Col xl='4'>
                        <Image src="/src/Images/featurei1.png" roundedCircle />
                        <Image src="/src/Images/featurei1.png" />
                    </Col>
                    <Col xl='4'>
                        asdasdasd
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About