import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, } from 'react-bootstrap'
import './Instructors.css';
import instructor1 from '../../Images/instructor1.png';
import instructor2 from '../../Images/instructor2.jpg';
import instructor3 from '../../Images/instructor3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../Contexts/Context';
import InstructorMiniDetails from '../../Components/Instructors/InstructorMiniDetails';

const Instructors = () => {
  const context = useContext(AppContext)
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    { url: instructor1, alt: "Eğitmen Görseli 1" },
    { url: instructor2, alt: "Eğitmen Görseli 2" },
    { url: instructor3, alt: "Eğitmen Görseli 3" }
  ]
  const auto = true;
  function nextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }
  function prevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }
  function slideInterval() {
    setInterval(() => {
      nextImage();
    }, 3000)
  }
  function autoNext() {
    if (auto) {
      slideInterval();
    }
  }
  function resetAuto() {
    if (auto) {
      clearInterval(slideInterval)
      slideInterval();
    }

  }
  useEffect(() => {
    autoNext();
    resetAuto();
  }, [])




  return (
    <>
      <Container className='d-flex flex-column gallery-wrap justify-content-center align-items-center'>
        <Card className='gallery-wrap border-0 position-relative mt-3 mb-5'>
          <Button className='btns back-btn p-3 fs-1 bg-transparent  position-absolute top-0 bottom-0 start-0' onClick={prevImage}><FontAwesomeIcon icon={faAngleLeft} /></Button>
          <div className='gallery'>
            {images.map(({ url, alt }) => (
              <Card.Img src={url} alt={alt} key={url} className='gallery-image' style={{ translate: `${-100 * imageIndex}%` }} />
            ))}
          </div>
          <Button className='btns next-btn fs-1 p-3 bg-transparent  position-absolute top-0 bottom-0 end-0' onClick={nextImage}><FontAwesomeIcon icon={faAngleRight} /></Button>
          <a href={`/instructors/${imageIndex}`} className='detail-btn fs-3 w-100 position-absolute bottom-0 start-0'></a>
        </Card>
        <Row className='mt-5'>
          {context.inst.map(i => (
            <InstructorMiniDetails key={i.Id} id={i.Id} name={i.Name} github={i.Github} email={i.Email} phone={i.Phone} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Instructors