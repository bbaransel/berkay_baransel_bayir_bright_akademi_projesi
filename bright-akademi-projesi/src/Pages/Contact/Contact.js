import React, { useContext } from 'react'
import { Form, InputGroup, Row, Col, Button, Container, Card } from 'react-bootstrap'
import { AppContext } from '../../Contexts/Context'

const Contact = () => {
    const context = useContext(AppContext)
    return (
        <>
            <Container className='d-flex flex-row'>
                <Row className='w-100'>
                    <Col xl={7}>
                        <Card className='map-responsive border-0 my-5' style={{ maxWidth: "800px" }}>
                            <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3009.1384647885097!2d29.006816!3d41.044101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0xa05d7aa13cfcaf89!2sBah%C3%A7e%C5%9Fehir%20%C3%9Cniversitesi%20Wissen%20Akademie!5e0!3m2!1str!2str!4v1705061699619!5m2!1str!2str" width="800" height="600" ></iframe>
                        </Card>
                    </Col>
                    <Col xl={5}>
                        <Card className='p-3 my-5 contact-card' >
                            <Form noValidate validated={context.validated} onSubmit={context.handleSubmit}>
                                <Row className="mb-4">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Ad</Form.Label>
                                        <Form.Label className='mx-3' style={{ color: 'gray' }}>(*)</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Adınızı giriniz"
                                        // defaultValue="Mark"
                                        />
                                        <Form.Control.Feedback>Güzel görünüyor.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Soyad</Form.Label>
                                        <Form.Label className='mx-3' style={{ color: 'gray' }}>(*)</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Soyadınızı giriniz"
                                        // defaultValue="Otto"
                                        />
                                        <Form.Control.Feedback>Güzel Görünüyor!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4">
                                    <Form.Group as={Col} md="6" controlId="validationCustomE-mail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Label className='mx-3' style={{ color: 'gray' }}>(*)</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                placeholder="ornek@email.com"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Lütfen bir mail adresi giriniz.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Telefon Numarası</Form.Label>
                                        <Form.Label className='mx-3' style={{ color: 'gray' }}>(*)</Form.Label>
                                        <Form.Control type="text" placeholder="+90 (530) 000 0000" required />
                                        <Form.Control.Feedback type="invalid">
                                            Lütfen bir telefon numarası giriniz.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4">
                                    <Form.Group as={Col} md="6" controlId="validationCustom04" className='mt-3 mb-2'>
                                        <Form.Label>Konu</Form.Label>
                                        <Form.Control type="text" placeholder="Başlığınızı giriniz" required />
                                        <Form.Control.Feedback type="invalid">
                                            Konu boş bırakılamaz.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05" className='my-3'>
                                        <Form.Label>Mesajınız</Form.Label>
                                        <Form.Control type="text" placeholder="..." required rows={6} as='textarea' />
                                        <Form.Control.Feedback type="invalid">
                                            Boş mesaj gönderilemez.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                {/* <Form.Group className="my-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group> */}
                                <Button type="submit" variant='danger'>Gönder</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact