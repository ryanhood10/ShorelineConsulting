import React from 'react';

const CompanyStory = () => {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto py-12 lg:py-16 px-4">
        {/* Title */}
        <h2 className="text-center text-3xl lg:text-4xl font-light text-navy">
          Our Story
        </h2>

        {/* Story Content */}
        <div className="mt-8 lg:mt-12 flex flex-col gap-6 text-sm md:text-base text-gray-600 lg:gap-8">
          <p>
            Shoreline was founded in 2020 by University of Tennessee graduate David Hood. 
            With previous work in SaaS, David witnessed breakthroughs in AI and automation 
            and was inspired to help everyday businesses apply these technologies to increase 
            their profits and productivity.
          </p>
          <p>
            Teaming up with online marketing experts and gathering a talented group of software developers, 
            Shoreline embarked on a mission to empower companies with the latest in digital solutions. 
            From creating cutting-edge websites to managing complex databases and enhancing SEO strategies, 
            we are dedicated to driving growth and success for our clients.
          </p>
          <p>
            Shoreline continues to evolve, helping businesses unlock new opportunities by leveraging 
            AI, automation, and tailored marketing strategies to improve customer engagement, streamline 
            operations, and increase overall sales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
