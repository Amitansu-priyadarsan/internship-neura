import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import Challenges from './pages/Challenges';
import ThankYou from './pages/ThankYou';

function App() {
  // This value is used to update the company name throughout the site
  // Update this with your company name once
  const [companyName, setCompanyName] = useState('[Company Name]');
  
  // This value is used to update your name throughout the site
  // Update this with your name once
  const [yourName, setYourName] = useState('[Your Name]');

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header companyName={companyName} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home companyName={companyName} yourName={yourName} />} />
            <Route path="/about" element={<About yourName={yourName} />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/thank-you" element={<ThankYou companyName={companyName} />} />
          </Routes>
        </main>
        <Footer companyName={companyName} yourName={yourName} />
      </div>
    </BrowserRouter>
  );
}

export default App;