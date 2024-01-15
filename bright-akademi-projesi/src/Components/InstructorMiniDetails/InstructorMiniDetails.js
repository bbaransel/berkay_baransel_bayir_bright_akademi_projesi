import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

import { AppContext } from '../../Contexts/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const InstructorMiniDetails = ({ id, name, github, email, phone, linkedin }) => {
    const context = useContext(AppContext);

    return (
        <>
            <Col md={6} xl={4}>
                <Card className='mini-card my-5 mx-auto' style={{ width: '20rem', height: '18rem' }}>
                    <Card.Body className='m-0 position-relative px-4 pt-5 text-center'>
                        <Card.Img className='mini-img position-absolute top-0 start-50 translate-middle' src={context.images[id].url} />
                        <Card.Title className='mt-4 mb-3 pt-4 fs-4'>{name}</Card.Title>
                        <Card.Text className='fs-6'><FontAwesomeIcon className='me-1' icon={faEnvelope} />{email}</Card.Text>
                        <Card.Text><FontAwesomeIcon className='me-2 ' icon={faPhone} />{phone}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className='d-flex justify-content-center align-items-center'>
                            <Link className='mini-link me-2' to={github} target='_blank' ><i className="fa-brands fa-github fs-3 text-dark"></i></Link>
                            <Link className='mini-link me-2' to={github} target='_blank' ><i className="fa-brands fa-linkedin fs-3 text-dark"></i></Link>
                            <Link to={`/instructors/${id}`}>
                                <Button variant='secondary' className='p-1' >Detaylı bilgi</Button>
                            </Link>
                        </Card.Text>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default InstructorMiniDetails