import React, { useContext } from 'react'
import { Form, InputGroup, Row, Col, Button, Container, Card } from 'react-bootstrap'
import { AppContext } from '../../Contexts/Context'

const Contact = () => {
    const context = useContext(AppContext)
    return (
        <>
            <Container>
                <Card className='p-3 m-5'>
                    <Form noValidate validated={context.validated} onSubmit={context.handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Ad</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Adınızı giriniz"
                                    // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Güzel Görünüyor!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Soyad</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Soyadınızı giriniz"
                                    // defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Güzel Görünüyor!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomE-mail">
                                <Form.Label>E-mail</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="mail adersinizi giriniz"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Lütfen geçerli bir mail adresi giriniz.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Şehir</Form.Label>
                                <Form.Control type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" placeholder="Zip" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit" variant='danger'>Gönder</Button>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default Contact