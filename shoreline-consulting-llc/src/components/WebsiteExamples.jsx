import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import AppPic1 from '../assets/background2.png'
import BondsWebsite from '../assets/BondsWebsite.png';
import btcBayWebsite from '../assets/btcBayWebsite.png'



const WebsiteExamples = () => {
  const link = '/Solutions/website-builds/showcase'; // Single link for all cards

  const recentWorks = [
    {
      title: 'Website | Bonds Southeast Inc.',
      image: BondsWebsite,
      link: link,
    },
    {
      title: 'App | Bitcoin Bay',
      image: btcBayWebsite,
      link: link,
    },
    {
      title: 'App | MyCommission',
      image: AppPic1,
      link: link,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h4 className="text-xl md:text-2xl font-semibold mb-2">
          RECENT PROGRAMMING SAMPLES |{' '}
          <a
            href="/Solutions/website-builds/showcase"
            className="font-bold text-blue-500 hover:underline"
          >
            VIEW FULL PORTFOLIO
          </a>
        </h4>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 }, // Show 3 slides on mobile
          768: { slidesPerView: 3 }, // Show 3 slides on tablet
          1024: { slidesPerView: 3 }, // Show 3 slides on desktop
        }}
      >
        {recentWorks.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <a href={work.link}>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{work.title}</h4>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WebsiteExamples;

