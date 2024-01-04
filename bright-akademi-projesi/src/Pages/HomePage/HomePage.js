import React from 'react'
import Hero from '../../Components/Hero/Hero'
import { Container } from 'react-bootstrap'
import About from '../../Components/About/About'
import './HomePage.css'
import Why from '../../Components/Why/Why'
import Spacer from '../../Components/Spacer'
import Process from '../../Components/Process/Process'


const HomePage = () => {
  return (
    <>
      <Container fluid className='m-0 p-0 hp-wrap'>
        <Hero />
        <Spacer />
        <About />
        <Spacer />
        <Why />
        <Spacer />
        <Process />
      </Container>

    </>
  )
}

export default HomePage