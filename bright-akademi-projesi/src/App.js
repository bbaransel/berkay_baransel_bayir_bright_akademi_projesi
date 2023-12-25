import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContext } from './Contexts/Context';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer';
import Contact from './Pages/Contact/Contact';
import { useState } from 'react';

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

  return (
    <>
      <AppContext.Provider value={{validated, setValidated, handleSubmit}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<Contact />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
