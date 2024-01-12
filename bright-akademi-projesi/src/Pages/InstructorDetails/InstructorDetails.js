import React, { useContext } from 'react'
import { AppContext } from '../../Contexts/Context';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import "./InstructorDetails.css";

const InstructorDetails = () => {
  const context = useContext(AppContext)
  const { id } = useParams();
  return (
    <Container className='d-flex justify-content-center align-items-center '>
      <Card className='px-3 my-5 border-0 w-75 inst-detail-card text-light'>
        <Row>
          <Col lg={5}>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Img src={context.images[id].url} className='mt-3 rounded-circle' />
              <Card.Text className='mt-5'> {context.inst[id].Email}</Card.Text>
              <Card.Text className='my-2'><FontAwesomeIcon className='me-2 inst-detail-phone' icon={faPhone} />{context.inst[id].Phone}</Card.Text>
            </Card.Body>
            <Card.Footer className='bg-transparent text-center py-3'>
              <a className='mini-link me-2' href={context.inst.Github} target='_blank' ><i className="fa-brands fa-github fs-3"></i></a>
              <a className='mini-link me-2' href={context.inst.Linkedin} target='_blank' ><i className="fa-brands fa-linkedin fs-3 "></i></a>
            </Card.Footer>
          </Col>
          <Col lg={7}>
            <Card.Body className='mb-4'>
              <Card.Title className='display-5 fw-normal mb-4 mt-3 inst-detail-title'>
                {context.inst[id].Name}
              </Card.Title>
              <Card.Text className='fs-5'>
                {context.inst[id].Desc}
              </Card.Text>
              <Card.Text className='fs-5'>
                {context.inst[id].Desc}
              </Card.Text>
              <Card.Text className='fs-5'>
                {context.inst[id].Desc}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>

      </Card>
    </Container>
  )
}

export default InstructorDetails