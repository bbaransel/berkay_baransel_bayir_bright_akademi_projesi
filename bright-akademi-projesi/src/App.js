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
import Education from './Components/Education/Education';

function App({ educations }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // Changes on navbar when scrolled

  document.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar-scroll');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })
  // Educations
  const edu = [
    {
      Id: 0,
      Name: 'Full Stack Programlama Eğitimi',
      Desc: 'Full stack developer olarak çalışan uzmanlar, yazılımların back-end (arka katman) ve front-end(ön katman) olarak nitelendirilen bölümlerinde rol almaktadırlar. Aynı zamanda veritabanı programlama alanlarında yetkinlikleri olup, geliştirilmekte olan projenin yazılımla ilgili bütün aşamalarında görev almaktadırlar. Full Stack Development, HTML, CSS, JavaScript, ReactJS, Node.JS gibi birçok dil barındırmaktadır. Doğası gereği geniş ilgi alanına sahip bir disiplindir. Back-End’den Front-End’e ve veritabanlarına kadar uzanan bu yetkinlik Türkiye’de en çok aranan yazılım programlama dallarından biridir.',
      Desc2: '',
      Link: 'https://baubright.com/pdfler/FullStackProgramlamaEgitimi.pdf'
    },
    {
      Id: 1,
      Name: 'Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi',
      Desc: 'Günümüzün en ilgi çekici ve teknolojik olarak en çok konuşulan konuların bütününü oluşturan network, sistem ve siber güvenlik kavramını, çalışma alanlarını tanıtmayı, bu alanda çalışmak isteyen kişilere yönelik geniş bir bilgi yelpazesi sunmayı ve uygulamalı eğitim modeli ile uzmanlık kazandırmayı hedeflemektedir.',
      Desc2: 'Katılımcılar, mevcut güvenlik tehditlerini anlamayı, önleyici önlemler almayı, saldırıları tespit etmeyi ve müdahale etmeyi ögreneceklerdir. Ayrıca, ağ ve sistem altyapılarını korumak için gerekli olan güvenlik politikalarını oluşturma ve uygulama becerileri kazanacaklardır. Bu eğitim, katılımcıları sektördeki rekabetçi ortamda öne çıkmalarını sağlamak için gereken bilgi ve yetenekleri sağlayacaktır.',
      Link: 'https://baubright.com/pdfler/NetworkSistemveSiberGuvenlikUzmanlikEgitimi.pdf'
    },
    {
      Id: 2,
      Name: 'Bulut Bilişim Uzmanlık Eğitimi',
      Desc: 'Bulut bilişim, bilgi işlem hizmetlerinin (sunucu, depolama, veri tabanı, ağ, yazılım, analiz ve makine zekası dahil) internet -bulut- üzerinden sağlanarak daha hızlı inovasyon, esnek kaynaklar ve ekonomik ölçeklendirme sunulması anlamına gelir. Normalde yalnızca kullandığınız bulut hizmetleri için ödeme yaptığınızdan işletim maliyetlerinizi düşürebilir, altyapınızı daha verimli bir şekilde çalıştırabilir ve değişen iş gereksinimlerinize uygun şekilde ölçeklendirme yapabilirsiniz.',
      Desc2: 'Günümüzde birçok kurum bulut teknolojisini kullanır ve birçok uzman bu devrim niteliğindeki bilgi işlem eğiliminin konsepti ile ilgili geliştirmeler yapar. Bulut bilgi işlem, işletmelerin BT kaynaklarına bakış açısını önemli ölçüde değiştirdi. Kurumlar, maliyet, küresel ölçeklendirme, performans, hız ve verimlilik gibi avantajları nedeniyle bulut bilişim hizmetlerine oldukça ilgi duymaktadırlar.',
      Link: 'https://baubright.com/pdfler/BulutBilisimUzmanlikEgitimi.pdf'
    },
    {
      Id: 3,
      Name: 'Full Data Uzmanlık Eğitimi',
      Desc: 'Modern zamanın petrolü olarak kabul edilen verinin yakalanması, güvenli olarak saklanması, depolanması, yönetilmesi, programlanması, analiz edilmesi ve raporlanması tüm işletmeler için çok önemli hale gelmiştir. Verinin artan hacmi, türü ve oluşma hızı nedeniyle geleneksel yöntemlere ek olarak yeni nesil veri tabanları ve bulut teknolojiler gibi farklı mecralarda çalışma ihtiyaçları doğmuştur. Bu bağlamda piyasada veri mühendisi, veri bilimcisi, veri analisti, raporlama uzmanı ve veri tabanı yöneticisi gibi roller her zamankinden daha fazla talep edilir olmuştur. Bu eğitimle veriyle ilgili tüm parçalara derinlemesine girilip hem geleneksel veri tabanlarına hem büyük veri sistemlerine hem de bulut tabanlı veri tabanlarına hakim olunması sağlanacak ve katılımcılara veri ile ilgili bütünsel bir uzmanlık kazandırılacaktır.',
      Desc2: '',
      Link: 'https://baubright.com/pdfler/FullDataUzmanlikEgitimi.pdf'
    }
  ];
  // Instructors
  const inst = [
    {
      Id:0,
      Name:'Engin Niyazi Ergül',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse semper ipsum porttitor, pulvinar nulla bibendum, dapibus magna.Nunc rutrum magna id leo convallis gravida.Vestibulum.',
      Img:'../../Images/instructor1.png'
    }
  ];
  return (
    <>
      <AppContext.Provider value={{ validated, setValidated, handleSubmit, edu }}>
        <BrowserRouter>
          <Container fluid className='wave m-0 p-0' >
            <Header />
            <FloatingIcons />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/educations/:id' element={<Education />} />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
