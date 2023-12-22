import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContext } from './Contexts/Context';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <AppContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
