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
import SeoQA from './components/SeoQA';
import ChatbotQA from './components/ChatbotQA';
import CROFeatures from './components/CROFeatures';
import CROSeller from './components/CROSeller';
import CroQA from './components/CroQA';
import CroCTA from './components/CroCTA';
import CROInfo from './components/CROInfo';
import LearningCenter from './components/LearningCenter';
import LearnSolutions from './components/LearnSolutions';
import ConnectWithUs from './components/ConnectWithUs';
import CompanyServices from './components/CompanyServices';
import CompanyMeet from './components/CompanyMeet';
import CompanyStory from './components/CompanyStory';
import CompanyPartners from './components/OurPartners';
import CareersPage from './components/CareersPage';
import BlogPostHomepage from './components/BlogPostHomepage';
import BlogSubscription from './components/BlogSubscription';
import PortfolioHome from './components/PortfolioHome';
import ChatbotDocument from './components/DocumentPages/ChatbotFeaturesDoc';
import WebsiteBuildsDoc from './components/DocumentPages/WebsiteBuildsDoc';
import DatabaseManagementDoc from './components/DocumentPages/DatabaseManagementDoc';
import SEODoc from './components/DocumentPages/SEODoc';
import CRODoc from './components/DocumentPages/CRODoc';
import DocumentsHomepage from './components/DocumentPages/DocumentsHomepage';
import BlogCrafting from './components/BlogPages/BlogCrafting';
import BlogDatabaseSelection from './components/BlogPages/BlogDatabaseSelection';
import BlogRagsToRiches from './components/BlogPages/BlogRagsToRiches';
import BlogCertifiedWinners from './components/BlogPages/BlogCertifiedWinners';
import BlogMobileApp from './components/BlogPages/BlogMobileApp';
import PortfolioBonds from './components/PortfolioPages/BondsPortfolio';
import PortfolioPMT from './components/PortfolioPages/PMTPortfolio';
import PortfolioSeaverMarketing from './components/PortfolioPages/PortfolioSeaverMarketing';
import PortfolioBitcoinBay from './components/PortfolioPages/PortfolioBitcoinBay';


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
              path="/Learn"
              element={
                <>
                  <Navbar />
                  <ContactHero />
                  <LearningCenter />
                  <LearnSolutions />
                  <ConnectWithUs />
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
                  <CompanyMeet />
                  <CompanyStory />
                  <CompanyPartners />
                  <CompanyServices />
                  
                  <Contact />
                  <FooterSection />
                  <Footer />
                </>
              }
            /> 
             <Route
          path="/Blog"
          element={
            <>
              <Navbar />
              <ContactHero />
              <BlogSubscription />     
              <BlogPostHomepage />   
              <ConnectWithUs/>  
              <FooterSection />
              <Footer />
            </>
          }
        />
         <Route
          path="/Blog/crafting-online-presence"
          element={
            <>
              <Navbar />
              <ContactHero />
              <BlogSubscription />     
              <BlogCrafting />   
              <ConnectWithUs/>  
              <FooterSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/Blog/selecting-the-right-database"
          element={
            <>
              <Navbar />
              <ContactHero />
              <BlogSubscription />     
              <BlogDatabaseSelection />   
              <ConnectWithUs/>  
              <FooterSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/Blog/rags-to-riches"
          element={
            <>
              <Navbar />
              <ContactHero />
              <BlogSubscription />     
              <BlogRagsToRiches />   
              <ConnectWithUs/>  
              <FooterSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/Blog/certified-ai-winners"
          element={
            <>
              <Navbar />
              <ContactHero />
              <BlogSubscription />     
              <BlogCertifiedWinners />   
              <ConnectWithUs/>  
              <FooterSection />
              <Footer />
            </>
          }
        />
         <Route
          path="/Blog/great-mobile-apps"
          element={
            <>
              <Navbar />
              <BlogSubscription />     
              <BlogMobileApp />   
              <ConnectWithUs/>  
              <FooterSection />
              <Footer />
            </>
          }
        />
        {/* Portfolio Pages */}
        <Route
          path="/Portfolio"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
         <Route
          path="/Portfolio/bonds-southeast"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioBonds />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
 <Route
          path="/Portfolio/seaver-marketing-group"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioSeaverMarketing />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
 <Route
          path="/Portfolio/pmt-site"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioPMT />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />

<Route
          path="/Portfolio/bitcoin-bay"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioBitcoinBay />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
         <Route
          path="/Portfolio/saas-shell"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
 <Route
          path="/Portfolio/creative-coloring"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
 <Route
          path="/Portfolio/vincent-peach"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />

<Route
          path="/Portfolio/product-listing-optimization"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />

<Route
          path="/Portfolio/seo-boost-strategy"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
 <Route
          path="/Portfolio/database-manager"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />

<Route
          path="/Portfolio/bitcoin-bay-chatbot"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />
 <Route
          path="/Portfolio/3d-model-maker"
          element={   
             <> 
              <Navbar />  <ContactHero />    <PortfolioHome />    <ConnectWithUs/> <FooterSection />         <Footer />
            </>     }
        />


            <Route
            path="/Solutions/ai-agents"
            element={
              <>
                <Navbar />
                <ContactHero />
                <AIChatbotExplainer />
                <ChatbotBenefits />
                <ChatbotQA />
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
              <SeoQA />
              <FooterSection />
              <Footer />
            </>
          }
        />  
           <Route
          path="/Solutions/seo"
          element={
            <>
              <Navbar />
              <ContactHero />
              <SEOHero/>
              <SeoCta />
              <SEOInfo />
              <SeoQA />
              <FooterSection />
              <Footer />
            </>
          }
        />     <Route
        path="/Solutions/cro-strategies"
        element={
          <>
            <Navbar />
            <ContactHero />
            <CROFeatures/>
            <CROSeller/>
            <CroCTA />
            <CROInfo />
            <CroQA />
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
       <Route
          path="/careers/home"
          element={
            <>
              <Navbar />
              <ContactHero />
            <CareersPage/>
            
              <FooterSection />
              <Footer />
            </>
          }
        />
         <Route
          path="/docs"
          element={
            <>
              <Navbar />
              <ContactHero />
            <DocumentsHomepage/>
              <FooterSection />
              <Footer />
            </>
          }
        />
         <Route
          path="/docs/ai-agents"
          element={
            <>
              <Navbar />
              <ContactHero />
            <ChatbotDocument/>
            <ChatbotQA/>
              <FooterSection />
              <Footer />
            </>
          }
        />
         <Route
          path="/docs/website-builds"
          element={
            <>
              <Navbar />
              <ContactHero />
            <WebsiteBuildsDoc/>
            <WebsiteQA/>
              <FooterSection />
              <Footer />
            </>
          }
        />
            <Route
          path="/docs/database-management"
          element={
            <>
              <Navbar />
              <ContactHero />
            <DatabaseManagementDoc/>
            <DatabaseQA/>
              <FooterSection />
              <Footer />
            </>
          }
        />
          <Route
          path="/docs/seo"
          element={
            <>
              <Navbar />
              <ContactHero />
            <SEODoc/>
            <SeoQA/>
              <FooterSection />
              <Footer />
            </>
          }
        />
         <Route
          path="/docs/cro"
          element={
            <>
              <Navbar />
              <ContactHero />
            <CRODoc/>
            <CroQA/>
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
