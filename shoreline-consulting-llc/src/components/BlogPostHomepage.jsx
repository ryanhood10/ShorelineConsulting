import React, { useState } from 'react';
import Globe from '../assets/Globe.png'; // Assuming you have this image in your assets
import BlogPoster from '../assets/HitchHikerBlog.webp';
import CertBlog from '../assets/CertBlog.webp';
import ShorelineLogo from '../assets/PalmTreeTransparent.png';
import BlogImage1 from '../assets/BlogPictures/RagsToRichesHero.webp';

const BlogPostHomepage = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Blog posts data
  const blogPosts = [
    {
      title: 'Crafting an Online Presence that Sets Your Business Foundation',
      subheading: 'Key Strategies for Online Success: Perfect & Practical Tools',
      topic: 'Marketing',
      image: Globe,
      date: 'March 14, 2023',
    },
    {
      title: "A HitchHiker's Guide to Selecting the Right Database",
      subheading: 'Choosing the right database for your project',
      topic: 'Software Engineering',
      image: BlogPoster,
      date: 'June 7, 2023',
    },
    {
      title: 'Certified Winners: Our New Favorite AI Tools',
      subheading: 'Exploring the best AI tools for your business',
      topic: 'AI',
      image: CertBlog,
      date: 'September 20, 2023',
    },
    {
      title: 'What Makes a Good Web Application?',
      subheading: 'Essential qualities every modern web app should have',
      topic: 'Software Engineering',
      image: BlogPoster,
      date: 'January 22, 2023',
    },
    {
      title: 'Rags to Riches: How to Utilize Web Technologies to Earn More Profits',
      subheading: 'Harness the power of the web to maximize your revenue',
      topic: 'Marketing',
      image: BlogImage1,
      date: 'February 15, 2023',
    },
  ];

  // Filter function
  const filteredPosts =
    selectedTopic === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.topic === selectedTopic);

  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex items-center justify-center pb-4">
          {/* Shoreline logo with increased size */}
          <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 mr-4" />
          {/* Partners text */}
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Blog Posts
          </h2>        
          <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 ml-4 transform scale-x-[-1]" />
        </div>
        <div className="text-center mb-8">
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Discover insights and tips across various topics like Marketing, CRO, SEO, AI, and Software Engineering.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedTopic('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'Marketing'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedTopic('Marketing')}
          >
            Marketing
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'CRO & SEO'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedTopic('CRO & SEO')}
          >
            CRO & SEO
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'AI'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedTopic('AI')}
          >
            AI
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'Software Engineering'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedTopic('Software Engineering')}
          >
            Software Engineering
          </button>
        </div>
        <hr className="pb-8 w-full border-t-2 border-gray-300 " />

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 "
                />
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-2">
                    {post.topic}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{post.subheading}</p>
                  <p className="text-gray-500 text-sm">Published on {post.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-8">
              <p className="text-xl font-semibold text-gray-700">
                No blog posts available for this topic.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPostHomepage;
