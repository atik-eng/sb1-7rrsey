import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Services from './components/Services';
import Footer from './components/Footer';
import CompanyIntro from './components/CompanyIntro';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Carousel />
              <CompanyIntro />
              <Services />
              <News />
            </main>
          } />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;