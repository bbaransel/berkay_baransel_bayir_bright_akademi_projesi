import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

import { AppContext } from '../../Contexts/Context';
const InstructorMiniDetails = ({ id, name, github, email, phone, linkedin }) => {
    const context = useContext(AppContext);

    return (
        <>
            <Col md={6} lg={4}>
                <Card className='mini-card my-5' style={{ width: '20rem', height: '18rem' }}>
                    <Card.Body className='m-0 position-relative px-4 pt-5 text-center'>
                        <Card.Img className='mini-img position-absolute top-0 start-50 translate-middle' src={context.images[id].url} />
                        <Card.Title className='mt-5 pt-3 fs-4'>{name}</Card.Title>
                        <Card.Text className='fs-6'>{email}</Card.Text>
                        <Card.Text>{phone}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className='d-flex justify-content-center align-items-center'>
                            <a className='mini-link me-2' href={github} target='_blank' ><i className="fa-brands fa-github fs-3 text-dark"></i></a>
                            <a className='mini-link me-2' href={github} target='_blank' ><i className="fa-brands fa-linkedin fs-3 text-dark"></i></a>
                            <Button variant='secondary' href={`/instructors/${id}`} className='p-1' >Detaylı bilgi</Button>
                        </Card.Text>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default InstructorMiniDetails