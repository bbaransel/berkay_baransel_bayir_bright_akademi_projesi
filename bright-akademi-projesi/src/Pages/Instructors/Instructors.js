import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Row, } from 'react-bootstrap'
import './Instructors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../Contexts/Context';
import InstructorMiniDetails from '../../Components/InstructorMiniDetails/InstructorMiniDetails';
import { Link } from 'react-router-dom';

const Instructors = () => {
  const context = useContext(AppContext)
  const [imageIndex, setImageIndex] = useState(0);

  function nextImage() {
    setImageIndex(imageIndex === context.images.length - 1 ? 0 : imageIndex + 1)

  }
  function prevImage() {
    setImageIndex(imageIndex < 1 ? context.images.length - 1 : imageIndex - 1)
  }
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextImage()
    }, 3500)
    return () => clearInterval(slideInterval)
  }, [imageIndex])





  return (
    <>
      <Container className='d-flex flex-column justify-content-center align-items-center'>
        <Card className='gallery-wrap border-0 position-relative mt-4 mb-5 rounded-0'>
          <Button className='btns back-btn p-3 fs-1 bg-transparent  position-absolute top-0 bottom-0 start-0' onClick={prevImage}><FontAwesomeIcon icon={faAngleLeft} /></Button>
          <div className='gallery'>
            {context.images.map(({ url, alt }) => (
              <Card.Img src={url} alt={alt} key={url} className='gallery-image rounded-0' style={{ translate: `${-100 * imageIndex}%` }} />
            ))}
          </div>
          <Button className='btns next-btn fs-1 p-3 bg-transparent  position-absolute top-0 bottom-0 end-0' onClick={nextImage}><FontAwesomeIcon icon={faAngleRight} /></Button>
          <Link to={`/instructors/${imageIndex}`} className='detail-btn fs-3 w-100 position-absolute bottom-0 start-0'></Link>
        </Card>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          {context.inst.map(i => (
            <InstructorMiniDetails key={i.Id} id={i.Id} name={i.Name} github={i.Github} email={i.Email} phone={i.Phone} linkedin={i.Linkedin} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Instructors