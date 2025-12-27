
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import WhatsAppFAB from './components/WhatsAppFAB';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50 overflow-x-hidden selection:bg-pink-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <VideoSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
