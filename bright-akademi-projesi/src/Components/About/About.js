import React from 'react'
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap'
import featurei1 from '../../Images/featurei1.png';
import featurei2 from '../../Images/featurei2.png';
import featurei3 from '../../Images/featurei3.png';

const About = () => {
    return (
        <>
            <Container fluid className='m-0'>
                <Card className='p-5 border-0 card-bau text-white' id='bau'>
                    <Card.Body>
                        <Card.Title className='display-3 my-5'>BAU Bright Nedir?</Card.Title>
                        <Card.Text className='my-5 fs-4'>
                            Bahçeşehir Üniversitesi tarafından yürütülen ve proje deneyimi yüksek eğitici kadrosu ile fark yaratacak yazılım - sistem uzmanları yetiştiren bir kariyer programıdır. Sektör ihtiyaçları göz önünde bulundurularak hazırlanmış güncel ve son teknoloji eğitim içerikleriyle BAU Bright eğitimleri devam ediyor! Eğitimini tamamlayan adaylar bilişim sektöründe işe yerleştirilmektedir.
                        </Card.Text>
                    </Card.Body>
                    <Button variant='danger' className='my-3' href='/about'>Detaylı bilgi için tıklayınız</Button>
                </Card>
                <Row className='text-center my-5 pt-5 text-light'>
                    <Col md='4'>
                        <Image src={featurei1} roundedCircle className='feature mb-3' />
                        <h2>Eğitim</h2>
                    </Col>
                    <Col md='4'>
                        <Image src={featurei2} roundedCircle className='feature mb-3' />
                        <h2>Proje</h2>
                    </Col>
                    <Col md='4'>
                        <Image src={featurei3} roundedCircle className='feature mb-3' />
                        <h2>İş Hayatı</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About