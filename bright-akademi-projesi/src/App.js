import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContext } from './Contexts/Context';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import { useState } from 'react';
import FloatingIcons from './Components/FloatingIcons/FloatingIcons';
import { Container } from 'react-bootstrap';
import AboutPage from './Pages/AboutPage/AboutPage';

function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // Scroll yapıldığında navbarda yapılacak değişikleri uygulayan fonksiyon

  document.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar-scroll');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })

  return (
    <>
      <AppContext.Provider value={{ validated, setValidated, handleSubmit }}>
        <BrowserRouter>
          <Container fluid className='wave m-0 p-0' >
            <Header />
            <FloatingIcons />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
