import React from 'react'
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap'
import featurei1 from '../../Images/featurei1.png';
import featurei2 from '../../Images/featurei2.png';
import featurei3 from '../../Images/featurei3.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
                <Card className='p-5 border-0 card-bau text-white mt-5' id='bau'>
                    <Card.Body>
                        <Card.Title className='display-3 my-5'>BAU Bright Nedir?</Card.Title>
                        <Card.Text className='my-5 fs-4'>
                            Bahçeşehir Üniversitesi tarafından yürütülen ve proje deneyimi yüksek eğitici kadrosu ile fark yaratacak yazılım - sistem uzmanları yetiştiren bir kariyer programıdır. Sektör ihtiyaçları göz önünde bulundurularak hazırlanmış güncel ve son teknoloji eğitim içerikleriyle BAU Bright eğitimleri devam ediyor! Eğitimini tamamlayan adaylar bilişim sektöründe işe yerleştirilmektedir.
                        </Card.Text>
                    </Card.Body>
                    <Link className='my-3 mx-auto' to="/about" ><Button variant='danger' >Detaylı bilgi için tıklayınız</Button></Link>
                </Card>
                <Row className='text-center my-5 pt-5 text-light w-100'>
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