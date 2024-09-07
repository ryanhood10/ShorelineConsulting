import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CredentialsSection from './components/Credibility';
import CodeExamples from './components/CodeExamples';
import FeaturesSection from './components/Features';
import FooterSection from './components/FooterSection';
import './App.css';  // Moved here
import Contact from './components/Contact';
import ContactHero from './components/ContactHero';





function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                  <CredentialsSection />
                  <CodeExamples />
                  <FeaturesSection />
                  <FooterSection />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Contact"
              element={
                <>
                  <Navbar />
                  <ContactHero />
                  <Contact />
                  <Footer />
                </>
              }
            />
          
            {/* <Route
              path="/Product"
              element={
                <>
                  <Navbar />
                  <ProductHeader />
              
                  <Footer />
                </>
              }
            />
            <Route
              path="/Company"
              element={
                <>
                  <Navbar />
                  <ProductHeader />
                  <CompanyMeet />
                  <CompanyStory />
                  <MeetTheTeam />
                  <FooterSection />
                  <Footer />
                </>
              }
            />
             <Route
              path="/Contact"
              element={
                <>
                  <Navbar />
                  <ProductHeader />
                  <FooterSection />
                  <Footer />
                </>
              }
            /> */}
    
          </Routes>
        </Router>
      </div>
  );
}

export default App;
