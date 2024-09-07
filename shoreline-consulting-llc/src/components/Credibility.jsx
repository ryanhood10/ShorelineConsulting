import React from 'react';
import credentialLogo2 from '../assets/credentiallogo2.webp';
import credentialLogo3 from '../assets/credentiallogo3.webp';
import credentialLogo4 from '../assets/credentiallogo4.png';
import credentialLogo5 from '../assets/credentiallogo5.jpg';
import credentialLogo6 from '../assets/credentiallogo6.png';
import credentialLogo7 from '../assets/credentiallogo7.jpeg';
// Add more logo imports as needed

const CredentialsSection = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container mx-auto">
        <p className="text-center font-medium">
          Our Solutions use the{' '}
          <a href="/Company" className="underline hover:decoration-cyan-500">
            best technologies
          </a>{' '}
          that help power your company's{' '}
          <a href="/Product" className="underline hover:decoration-cyan-500">
            best solutions
          </a>
        </p>
        <div className="mt-12 lg:mt-16 flex flex-col gap-12">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-7 xs:gap-x-12 xs:gap-y-10">
            <img src={credentialLogo2} alt="Credential Logo 2" className="w-36" />
            <img src={credentialLogo3} alt="Credential Logo 3" className="w-36" />
            <img src={credentialLogo4} alt="Credential Logo 4" className="w-36" />
            <img src={credentialLogo5} alt="Credential Logo 5" className="w-36" />
            <img src={credentialLogo6} alt="Credential Logo 6" className="w-36" />
            <img src={credentialLogo7} alt="Credential Logo 7" className="w-36" />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
