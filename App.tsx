import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CredibilityBar from './components/CredibilityBar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import WhatsAppFAB from './components/WhatsAppFAB';
import Testimonials from './components/Testimonials';
import AgendaSemanal from './components/AgendaSemanal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-pink-300 bg-pink-50">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <CredibilityBar />
        <AgendaSemanal />
        <Services />
        <VideoSection />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;