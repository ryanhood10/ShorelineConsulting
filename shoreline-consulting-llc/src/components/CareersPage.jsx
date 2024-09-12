import React, { useState } from 'react';

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Careers at Shoreline
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Explore job opportunities at Shoreline. Use the search and filters to find your ideal role.
          </p>
          <hr className="mt-8 w-full border-t-2 border-gray-300 " />

        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full md:w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Filter */}
            <select
              value={filter}
              onChange={handleFilterChange}
              className="w-full md:w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>

        {/* No Jobs Available Message */}
        <div className="text-center py-8">
          <p className="text-xl font-semibold text-gray-700">
            No jobs currently available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
