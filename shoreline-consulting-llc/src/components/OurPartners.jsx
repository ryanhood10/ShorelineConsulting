import React, { useEffect, useRef } from 'react';
import BitcoinBayLogo from '../assets/partnerLogos/bitcoinbayLogo.webp';
import BondsSouthEastIncLogo from '../assets/partnerLogos/BondsSouthLogo.png';
import CreativeColoringLogo from '../assets/partnerLogos/CreativeColoringHeader.png';
import FuzzEraserLogo from '../assets/partnerLogos/FuzzEraserLogo.png';
import VincentPeachLogo from '../assets/partnerLogos/VincentPeachLogo.png';
import KroegerRealEstateLogo from '../assets/partnerLogos/KroegerRealEstateLogo.webp';
import PMTsiteLogo from '../assets/partnerLogos/PMTLogo.png';
import NashTrash from '../assets/partnerLogos/TrashHaulLogo.png';
import IBMLogo from '../assets/partnerLogos/IBMLogo.png';
import ShopLogo from '../assets/partnerLogos/ShopifyPartnerLogo.png';

const partnerLogos = [
    BondsSouthEastIncLogo,
    CreativeColoringLogo,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo, IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo,
    NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo,IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo,    NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo,IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo, NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo, IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo, NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo, IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo,
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
        <h3 className='pb-4 text-2xl font-semibold'>Our Partners</h3>
    <div className="flex justify-center overflow-hidden  h-120px">

      <div ref={carouselRef}
       className="flex overflow-hidden w-[80%]"       
        style={{ scrollBehavior: 'smooth' }}>
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner Logo ${index}`}
            className="h-full max-h-16 mx-4"
          />
        ))}
      </div>
    </div>
    </div>

  );
};

export default CompanyPartners;