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
import Solutions from './components/Solutions';
import SolutionsVideo from './components/Video';
import AIChatbotExplainer from './components/AIChatbotExplainer';
import ChatbotBenefits from './components/ChatbotBenefits';
import ProductsShowcase from './components/ProductsShowcase';
import SolutionsLeader from './components/SolutionsLeader';
import CustomerStory from './components/CustomerStory';
import WebsiteHero from './components/WebsiteHero';
import WebsiteCTA from './components/WebsiteCTA';
import WebsiteExamples from './components/WebsiteExamples';
import WebsiteQA from './components/WebsiteQA';
import DatabaseManagement from './components/DatabaseManagement';
import DatabaseSeller from './components/DatabaseSeller';
import DatabaseQA from './components/DatabaseQA';
import SEOHero from './components/SEOHero';
import SeoCta from './components/SeoCta';
import SEOInfo from './components/SEOInfo';
import SEOChart from './components/SEOChart';




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
                  <FooterSection />
                  <Footer />
                </>
              }
            />
             <Route
              path="/Solutions"
              element={
                <>
                  <Navbar />
                  <ContactHero />
                  <SolutionsLeader/>
                  <ProductsShowcase/>
                  <CustomerStory/>
                  <Solutions />
                  <SolutionsVideo />

                  <Contact />
                  <FooterSection />
                  <Footer />
                </>
              }
            />
          <Route
              path="/Pricing"
              element={
                <>
                  <Navbar />
                  <ContactHero />
                  <Contact />
                  <FooterSection />
                  <Footer />
                </>
              }
            />
               <Route
              path="/Company"
              element={
                <>
                  <Navbar />
                  <ContactHero />
                  <Contact />
                  <FooterSection />
                  <Footer />
                </>
              }
            /> 
            <Route
            path="/Solutions/ai-agents"
            element={
              <>
                <Navbar />
                <ContactHero />
                <AIChatbotExplainer />
                <ChatbotBenefits />
                <FooterSection />
                <Footer />
              </>
            }
          />
          <Route
          path="/Solutions/website-builds"
          element={
            <>
              <Navbar />
              <ContactHero />
              <WebsiteHero />
              <WebsiteCTA/>
              <WebsiteExamples />
              <WebsiteQA/>
              <FooterSection />
              <Footer />
            </>
          }
        />
          <Route
          path="/Solutions/seo-strategies"
          element={
            <>
              <Navbar />
              <ContactHero />
              <SEOHero/>
              <SeoCta />
              <SEOInfo />
              <SEOChart />
              <FooterSection />
              <Footer />
            </>
          }
        />  
        <Route
          path="/Solutions/database-management"
          element={
            <>
              <Navbar />
              <ContactHero />
            <DatabaseManagement/>
            <DatabaseSeller/>
            <DatabaseQA />
              <FooterSection />
              <Footer />
            </>
          }
        />
    
          </Routes>
        </Router>
      </div>
  );
}

export default App;
