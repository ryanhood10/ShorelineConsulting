import React from "react";
import { FaGamepad, FaPenNib, FaPaintBrush, FaCube, FaFilm, FaSlidersH, FaCogs, FaShoppingCart, FaBullhorn, FaPenFancy, FaPalette } from "react-icons/fa";
import BlogImage1 from '../../assets/CertBlog.webp';
import MidJourneyImage from '../../assets/BlogPictures/MidJourneyLogo.jpg'; // Placeholder for MidJourney
import LumaImage from '../../assets/BlogPictures/LumaAILogo.svg'; // Placeholder for Luma AI
import BeautifulAIImage from '../../assets/BlogPictures/BeautifulAILogo.png'; // Placeholder for Beautiful AI
import HaiperAIImage from '../../assets/BlogPictures/HaiperAILogo.jpg'; // Placeholder for Haiper AI
import Logo from '../../assets/PalmTreeTransparent.png';
import PalmTree3D from '../../assets/BlogPictures/PalmTree3dModel.glb'
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const BlogCertifiedWinners = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Setting initial camera position for better zoom
        camera.position.set(0, 0, 3); // Adjust as needed for better zoom
    
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    
        // Load the 3D model
        const loader = new GLTFLoader();
        loader.load(PalmTree3D, (gltf) => {
          scene.add(gltf.scene);
        });
    
        // Add orbit controls for drag/zoom functionality
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxDistance = 4; // Set max zoom-out distance
        controls.minDistance = 1; // Set min zoom-in distance
    
        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 1, 1).normalize();
        scene.add(light);
    
        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
    
        // Handle resizing
        const handleResize = () => {
          const width = canvasRef.current.clientWidth;
          const height = canvasRef.current.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };
        
        window.addEventListener("resize", handleResize);
    
        return () => {
          renderer.dispose();
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* <head>
        <title>Certified Winners: Our New Favorite AI Tools</title>
        <meta name="description" content="Explore our curated list of AI tools that are revolutionizing the way businesses create visuals, 3D assets, presentations, and animated videos." />
      </head> */}

      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-lg shadow-xl">
        {/* Blog Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Certified Winners: Our New Favorite AI Tools
          </h1>
          <p className="text-gray-600 text-lg">
            Discover the top AI tools that are transforming industries and helping businesses stay ahead of the curve.
          </p>
          <img
            src={BlogImage1}
            alt="Certified AI Tools"
            className="w-full rounded-md shadow-lg mt-8"
          />
        </header>

        {/* Blog Body */}
        <section className="space-y-16">
          {/* Section 1: MidJourney AI */}
<article className="space-y-4">
  <div className="w-3/5 mx-auto mb-6">
    <img
      src={MidJourneyImage}
      alt="MidJourney AI"
      className="w-full shadow-xl rounded-2xl h-auto object-contain"
    />
  </div>
  <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
    <FaPaintBrush className="mr-2" /> MidJourney AI: A Powerful Image Generator
  </h2>
  <p className="text-lg text-gray-800">
    MidJourney AI is a cutting-edge tool that allows businesses to generate stunning visuals from text prompts. Whether you need images for marketing, design, or creative projects, this tool has you covered.
  </p>

  {/* Benefits Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ul className="space-y-4">
      <li className="flex items-start">
        <FaCogs className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>High-quality image generation:</strong> Create detailed, professional-grade images from simple text prompts.
        </div>
      </li>
      <li className="flex items-start">
        <FaSlidersH className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>Customization options:</strong> Tailor your images by experimenting with various prompts and parameters.
        </div>
      </li>
    </ul>
    <ul className="space-y-4">
      <li className="flex items-start">
        <FaCogs className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>Design integration:</strong> Easily incorporate generated images into your design tools and creative workflows.
        </div>
      </li>
    </ul>
  </div>

  {/* Additional Use Cases */}
  <p className="text-lg text-gray-800 mt-6">
    MidJourney AI offers immense versatility for businesses across various industries. Below are a few examples of how this technology can be applied:
  </p>

  <ul className="space-y-4">
    <li className="flex items-start">
      <FaShoppingCart className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>E-commerce Marketing:</strong> Online stores can use MidJourney AI to generate product images or lifestyle visuals that resonate with specific target demographics. For example, an online furniture retailer might generate room setups showcasing different styles, such as modern, rustic, or minimalist, helping customers visualize the products in their homes.
      </div>
    </li>
    <li className="flex items-start">
      <FaBullhorn className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>Advertising Campaigns:</strong> Marketing agencies can use MidJourney AI to create ad creatives with unique visuals based on campaign themes. A fashion brand, for instance, could quickly generate seasonal images for social media ads, showing its collection in different environments (e.g., summer beaches or wintery streets).
      </div>
    </li>
    <li className="flex items-start">
      <FaPenFancy className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>Content Creation for Blogs and Social Media:</strong> Content creators and influencers can use MidJourney AI to produce eye-catching visuals for their blogs, articles, or social media posts. A travel blogger, for example, can generate visuals of dream destinations to enhance the visual appeal of their posts.
      </div>
    </li>
    <li className="flex items-start">
      <FaPalette className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>Graphic Design:</strong> Designers can use the platform to create mockups or test ideas for client presentations. A graphic designer working for a real estate firm, for example, could generate different styles of neighborhood imagery to better market properties in different settings.
      </div>
    </li>
  </ul>

  <p className="text-lg text-gray-800 mt-6">
    The ability to quickly produce high-quality visuals using AI enables businesses to stay agile and creative, giving them a competitive edge in industries where visuals drive engagement and sales.
  </p>
</article>


          <hr className="mb-8" />

          {/* Section 2: Luma AI */}
<article className="space-y-4">
  <div className="w-3/5 mx-auto mb-6">
    <img
      src={LumaImage}
      alt="Luma AI"
      className="w-full shadow-xl rounded-2xl h-auto object-contain"
    />
  </div>
  <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
    <FaCube className="mr-2" /> Luma AI: A 3D Asset Creation Platform
  </h2>
  <p className="text-lg text-gray-800">
    Luma AI is revolutionizing the world of 3D modeling with its NeRF-based technology. Whether you need 3D assets for games, animation, or e-commerce, Luma AI can create realistic models from images or videos.
  </p>

  {/* Benefits Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ul className="space-y-4">
      <li className="flex items-start">
        <FaCube className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>NeRF-based technology:</strong> Create realistic 3D models from 2D images or videos using neural radiance fields.
        </div>
      </li>
      <li className="flex items-start">
        <FaSlidersH className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>Customization options:</strong> Adjust the style, details, and materials to meet your project’s needs.
        </div>
      </li>
    </ul>
    <ul className="space-y-4">
      <li className="flex items-start">
        <FaCogs className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>3D software integration:</strong> Easily export your models to popular 3D modeling and animation tools.
        </div>
      </li>
    </ul>
  </div>
  {/* 3D Model Viewer */}
  <div className="w-4/5 h-[400px] relative mx-auto overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>

  {/* Additional Use Cases */}
  <p className="text-lg text-gray-800 mt-6">
    Luma AI offers a wide range of use cases for businesses across different industries. Here are a few examples of how this technology can be applied:
  </p>

  <ul className="space-y-4">
    <li className="flex items-start">
      <FaGamepad className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>Game Art:</strong> Game developers can generate high-quality, photorealistic 3D assets and environments at scale using the Luma API. This allows for faster asset creation for large gaming worlds while maintaining visual fidelity.
      </div>
    </li>
    <li className="flex items-start">
      <FaShoppingCart className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>E-commerce & AR:</strong> Retailers can create lifelike 3D models of their entire inventory for use on websites and augmented reality experiences. This enhances the online shopping experience, giving customers a 360° view of products.
      </div>
    </li>
    <li className="flex items-start">
      <FaFilm className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>VFX:</strong> Visual effects artists can integrate Luma AI into their workflows to produce photorealistic NeRF renders. Whether it's for film, television, or in-house tools, the API allows for seamless 3D model creation and rendering.
      </div>
    </li>
  </ul>

  {/* Additional Information */}
  <p className="text-lg text-gray-800 mt-6">
    Luma AI’s versatility and ease of integration with existing tools make it a valuable asset for businesses looking to leverage the power of 3D modeling and immersive experiences. From gaming to e-commerce and VFX, Luma AI can transform creative workflows and enhance user engagement.
  </p>
</article>


          <hr className="mb-8" />

          {/* Section 3: Beautiful AI */}
          <article className="space-y-4">
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={BeautifulAIImage}
                alt="Beautiful AI"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaPenNib className="mr-2" /> Beautiful AI: Design Made Easy
            </h2>
            <p className="text-lg text-gray-800">
              Beautiful AI takes the hassle out of creating presentations with smart templates and design suggestions that ensure professional results.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaPenNib className="text-cyan-500 text-3xl mr-2" />
                  <div>
                    <strong>Smart templates:</strong> Create beautiful presentations quickly with pre-designed templates and layouts.
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCogs className="text-cyan-500 text-3xl mr-2" />
                  <div>
                    <strong>Consistency:</strong> Maintain a consistent brand identity across all your presentations.
                  </div>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCogs className="text-cyan-500 text-3xl mr-2" />
                  <div>
                    <strong>Collaboration:</strong> Work seamlessly with your team to edit and enhance presentations.
                  </div>
                </li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Haiper AI */}
          <article className="space-y-4">
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={HaiperAIImage}
                alt="Haiper AI"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaFilm className="mr-2" /> Haiper AI: Animated Explainer Videos
            </h2>
            <p className="text-lg text-gray-800">
              Haiper AI is a versatile tool for creating animated explainer videos, complete with voiceovers and AI-powered templates, making it easier than ever to convey complex ideas.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaFilm className="text-cyan-500 text-3xl mr-2" />
                  <div>
                    <strong>Automated video creation:</strong> Generate professional-looking videos with AI-driven templates and voiceovers.
                  </div>
                </li>
                <li className="flex items-start">
                  <FaSlidersH className="text-cyan-500 text-3xl mr-2" />
                  <div>
                    <strong>Customization options:</strong> Customize videos with different styles, characters, and backgrounds.
                  </div>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCogs className="text-cyan-500 text-3xl mr-2" />
                  <div>
                    <strong>Export flexibility:</strong> Export your videos in various formats for use on websites, social media, and other platforms.
                  </div>
                </li>
              </ul>
            </div>
          </article>

        </section>

        {/* Conclusion */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            By incorporating AI tools like MidJourney AI, Luma AI, Beautiful AI, and Haiper AI into your workflow, you can unlock their full potential and drive growth in your business.
          </p>
          <p className="text-lg text-gray-800 text-center mt-4">
            These tools can help you improve efficiency, enhance customer experience, and make data-driven decisions that lead to success.
          </p>

          <hr className="mt-12" />

          {/* Call-to-Action */}
          <div className="text-center mt-8">
            <p className="text-xl font-semibold text-gray-900">Ready to Transform Your Workflow with AI?</p>
            <p className="text-lg text-gray-700 mt-2">Contact Shoreline Business Solutions today for expert advice on selecting and integrating AI tools into your business.</p>
            <a
              href="/Contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 mt-4"
            >
              Get in Touch
            </a>
          </div>

          {/* Company Branding */}
          <div className="mt-12">
            <div className="flex items-center justify-center">
              <img className="h-16" src={Logo} alt='Shoreline' />
              <p className="text-gray-600">&copy; 2024 Shoreline Business Solutions. All rights reserved.</p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogCertifiedWinners;
