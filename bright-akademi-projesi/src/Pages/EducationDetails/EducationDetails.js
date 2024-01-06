import React, { useContext } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Contexts/Context'

const EducationDetails = () => {
  const context = useContext(AppContext)
  const { id } = useParams();
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center '>
        <Card className='border-0 w-75 mt-5 p-5 text-light card-bau'>
          <Card.Body>
            <Card.Title className='display-5 mb-5'>
              {context.edu[id].Name}
            </Card.Title>
            <Card.Text className='fs-5'>
              {context.edu[id].Desc}
            </Card.Text>
            <Card.Text className='fs-5'>
              {context.edu[id].Desc2}
            </Card.Text>
            <Card.Text className='fs-5'>
              Detaylı bilgi için lütfen pdf dosyasına bakınız.
            </Card.Text>
          </Card.Body>
          <Button href={context.edu[id].Link} className=' mx-auto btn-danger mt-3' >PDF DOSYASI</Button>
        </Card>
      </Container>
    </>
  )
}

export default EducationDetails