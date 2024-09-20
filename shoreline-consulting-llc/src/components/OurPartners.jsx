import React, { useEffect, useRef } from 'react';
import BitcoinBayLogo from '../assets/partnerLogos/bitcoinbayLogo.webp';
import BondsSouthEastIncLogo from '../assets/partnerLogos/BondsSouthLogo.png';
import CreativeColoringLogo from '../assets/partnerLogos/CreativeColoringHeader.png';
import FuzzEraserLogo from '../assets/partnerLogos/FuzzEraserLogo.png';
import VincentPeachLogo from '../assets/partnerLogos/VincentPeachLogo.png';
import KroegerRealEstateLogo from '../assets/partnerLogos/KroegerRealEstateLogo.webp';
import PMTsiteLogo from '../assets/partnerLogos/PMTLogo.png';
// import NashTrash from '../assets/partnerLogos/TrashHaulLogo.png';
import IBMLogo from '../assets/partnerLogos/IBMLogo.png';
import ShopLogo from '../assets/partnerLogos/ShopifyPartnerLogo.png';
import ShorelineLogo from '../assets/PalmTreeTransparent.png';
import SeaverLogo from '../assets/partnerLogos/SeaverLogoNewHorizontal.png';
import JerniganLawLogo from '../assets/partnerLogos/JerniganLawLogo.png';


const partnerLogos = [
  CreativeColoringLogo,
  FuzzEraserLogo,
  VincentPeachLogo,
  KroegerRealEstateLogo,
  IBMLogo,
  // NashTrash,
  PMTsiteLogo,
  BitcoinBayLogo,
  JerniganLawLogo,
  ShopLogo,
  SeaverLogo,
  BondsSouthEastIncLogo
];

const CompanyPartners = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      carouselRef.current.scrollLeft += 120; // Adjust scroll speed as needed
    }, 2000); // Adjust interval as needed

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <div className="p-8 w-full bg-slate-200 text-center">
      {/* Flex container for logo and text */}
      <div className="flex items-center justify-center pb-4">
        {/* Shoreline logo with increased size */}
        <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 mr-4" />
        {/* Partners text */}
        <h3 className="text-2xl font-semibold">Our Partners</h3>
        <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 ml-4 transform scale-x-[-1]" />
      </div>

      <div className="relative flex justify-center overflow-hidden h-24">
        <div
          ref={carouselRef}
          className="flex w-full space-x-8 overflow-hidden animate-scroll"
          style={{ scrollBehavior: 'smooth' }}
        >
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner Logo ${index}`}
              className="h-full max-h-16 mx-4 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPartners;
