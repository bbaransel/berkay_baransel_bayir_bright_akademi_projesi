import React from 'react'
import { Container, Card } from 'react-bootstrap'

const HomePage = () => {
  return (
    <>
    <Container>
        <h1 className='display-4 text-center w-50 m-auto'>Geleceğin Teknolojilerini BAU ile Kodla</h1>
        <p className='text-center w-50 m-auto'>Üniversite onaylı sertifikanı al, lider bilişimci ol.</p>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Geleceğin Teknolojilerini BAU ile Kodla</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Üniversite onaylı sertifikanı al, lider bilişimci ol.</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
    </Container>
    
    </>
  )
}

export default HomePage