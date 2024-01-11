import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import instructor1 from '../../Images/instructor1.png';
import instructor2 from '../../Images/instructor2.jpg';
import instructor3 from '../../Images/instructor3.jpg';
const InstructorMiniDetails = ({ id, name, github, email, phone }) => {
    const imagesMini = [
        { url: instructor1, alt: "Eğitmen Görseli 1" },
        { url: instructor2, alt: "Eğitmen Görseli 2" },
        { url: instructor3, alt: "Eğitmen Görseli 3" }
    ]
    return (
        <>
            <Card >
                <Row>
                    <Col xs={3}>
                        <Card.Img className='mini-img' src={imagesMini[id].url} />
                    </Col>
                    <Col xs={9}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text><a href={github}><i className="fa-brands fa-github fs-5 text-dark"></i></a></Card.Text>
                        </Card.Footer>
                    </Col>
                </Row>
            </Card>

        </>
    )
}

export default InstructorMiniDetails