import React from 'react'
import About from '../../Components/About/About'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import './AboutPage.css'
const AboutPage = () => {
  return (
    <>
      <Container className='d-flex flex-column justify-content-center align-items-center'>
        <About />
        <Card className='card-why border-0 text-light text-center w-75 my-5'>
          <Card.Title className='display-3 my-5'>
            Neden Katılmalıyım
          </Card.Title>
          <Card.Text className='fs-5'>
            BAU Bright Eğitim ve İstihdam Projesi, Bahçeşehir Üniversitesi ve Wissen Teknoloji’nin bilişim, danışmanlık, telekomünikasyon ve yazılım sektörleri başta olmak üzere 5000+ iş ortağı ile desteklenmektedir.
          </Card.Text>
          <Card.Body>
            <ListGroup>
              <ListGroupItem className='text-start why-list-item border-0 text-light mb-2'>
                <Card.Title className='fw-semibold fs-4'>
                  6 Ay Uygulamalı Eğitim
                </Card.Title>
                <Card.Text>
                  Alanında uzman deneyimli eğiticilerimiz ile 6 ay sürecek eğitimimiz kapsamında öğrencilerimiz teknik eğitim ve kariyer eğitimi alacaklardır.
                </Card.Text>
              </ListGroupItem>
              <ListGroupItem className='text-start why-list-item border-0 text-light mb-2'>
                <Card.Title className='fw-semibold fs-4'>
                  Proje
                </Card.Title>
                <Card.Text>
                  Alanında uzman deneyimli eğiticilerimiz ile 6 ay süren temel eğitim boyunca katılımcılarımız kazandıkları yetkinlikleri senaryo niteliğindeki projelerde geliştirirler. Eğitim süresi dışında ise ev ve grup projeleri üzerine çalışarak becerilerini pekiştirirler.
                </Card.Text>
              </ListGroupItem>
              <ListGroupItem className='text-start why-list-item border-0 text-light mb-2'>
                <Card.Title className='fw-semibold fs-4'>
                  İş Hayatı
                </Card.Title>
                <Card.Text>
                  Eğitim ve proje süreçlerini tamamlayan BAU Bright mezunları, alanında profesyonel hizmet veren IK firmamız tarafından, bilişim alanında faaliyet gösteren firmalara yönlendirilerek iş hayatlarına başlarlar.
                </Card.Text>
              </ListGroupItem>
              <ListGroupItem className='text-start why-list-item border-0 text-light mb-2'>
                <Card.Title className='fw-semibold fs-4'>
                  Kariyer Danışmanlığı
                </Card.Title>
                <Card.Text>
                  Katılımcılara 12 ay boyunca kariyer danışmanlığı ayrıca eğitim süresince teknik uzman tarafından mentorluk hizmeti verilir.
                </Card.Text>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default AboutPage