import React, { useState } from 'react'
import { Button, Card, Container, } from 'react-bootstrap'
import './Instructors.css';
import instructor1 from '../../Images/instructor1.png';
import instructor2 from '../../Images/instructor2.jpg';
import instructor3 from '../../Images/instructor3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Instructors = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    { url: instructor1, alt: "Eğitmen Görseli 1" },
    { url: instructor2, alt: "Eğitmen Görseli 2" },
    { url: instructor3, alt: "Eğitmen Görseli 3" }
  ]
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
  return (
    <>
      <Container className='d-flex gallery-wrap justify-content-center align-items-center'>
        <Card className='gallery-wrap border-0 position-relative'>
          <Button className='back-btn fs-1 bg-transparent  position-absolute top-0 bottom-0 start-0' onClick={prevImage}><FontAwesomeIcon icon={faCircleArrowLeft} /></Button>
          <div className='gallery'>
            {images.map(({ url, alt }) => (
              <Card.Img src={url} alt={alt} className='gallery-image' style={{ translate: `${-100 * imageIndex}%` }} />
            ))}
          </div>
          <Button className='next-btn fs-1  bg-transparent  position-absolute top-0 bottom-0 end-0' onClick={nextImage}><FontAwesomeIcon icon={faCircleArrowRight} /></Button>          
          <Button variant='outline-light' href={`/instructors/${imageIndex}`} className='detail-btn fs-3   position-absolute bottom-0 start-50'>Detaylı Bilgi </Button>
        </Card>

      </Container>
    </>
  )
}

export default Instructors