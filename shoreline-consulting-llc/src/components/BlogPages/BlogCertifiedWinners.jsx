import React from "react";
import { FaImage, FaClock, FaClipboardCheck, FaGamepad, FaPenNib, FaPaintBrush, FaCube, FaFilm, FaSlidersH, FaCogs, FaShoppingCart, FaBullhorn, FaPenFancy, FaPalette } from "react-icons/fa";
import BlogImage1 from '../../assets/CertBlog.webp';
import MidJourneyImage from '../../assets/BlogPictures/MidJourneyLogo.jpg'; // Placeholder for MidJourney
import LumaImage from '../../assets/BlogPictures/LumaAILogo.svg'; // Placeholder for Luma AI
import BeautifulAIImage from '../../assets/BlogPictures/BeautifulAILogo.png'; // Placeholder for Beautiful AI
import HaiperAIImage from '../../assets/BlogPictures/HaiperAILogo.jpg'; // Placeholder for Haiper AI
import Logo from '../../assets/PalmTreeTransparent.png';
import PalmTree3D from '../../assets/BlogPictures/PalmTree3dModel.glb';
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Duck3D from '../../assets/BlogPictures/Duck3DModel.glb';
import MidJourneyExample from '../../assets/BlogPictures/MidJourneyExample.png';
import BeautifulAIExample from '../../assets/BlogPictures/BeautifulAIExample.png';
import HaiperVideo from '../../assets/BlogPictures/HaiperExample.mp4';

const BlogCertifiedWinners = () => {
    const palmTreeCanvasRef = useRef(null);
    const duckCanvasRef = useRef(null);
    
    const initializeScene = (canvasRef, modelPath, shouldRotateDuck = false) => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0); // Set background color
      
        const width = canvasRef.current.clientWidth;
        const height = 250; // Explicitly set the height to 250px
      
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        camera.position.set(0, 1, 1.5); // Bring the camera closer to the model
      
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.setSize(width, height);
      
        const loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
          // Check if the model is the duck and rotate it clockwise by 90 degrees on the Y-axis
          if (shouldRotateDuck) {
            gltf.scene.rotation.y = Math.PI / 2; // Rotate 90 degrees clockwise
          }
      
          scene.add(gltf.scene);
        });
      
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.maxDistance = 10;
        controls.minDistance = 1;
      
        // Make the light brighter by increasing the intensity
        const light = new THREE.DirectionalLight(0xffffff, 3); // Increase the intensity from 1 to 2 for more brightness
        light.position.set(0, 1, 1).normalize();
        scene.add(light);
      
        // Add ambient light to soften the shadows and make the scene brighter overall
        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Optional: Add ambient light with lower intensity
        scene.add(ambientLight);
      
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      
        const handleResize = () => {
          const newWidth = canvasRef.current.clientWidth;
          renderer.setSize(newWidth, 250); // Keep the height fixed at 250px
          camera.aspect = newWidth / 250;
          camera.updateProjectionMatrix();
        };
      
        window.addEventListener("resize", handleResize);
      
        return () => {
          renderer.dispose();
          window.removeEventListener("resize", handleResize);
        };
      };
      
      // Initialize the palm tree model without rotation
      useEffect(() => {
        initializeScene(palmTreeCanvasRef, PalmTree3D);
      }, []);
      
      // Initialize the duck model with 90-degree clockwise rotation
      useEffect(() => {
        initializeScene(duckCanvasRef, Duck3D, true); // Pass true to apply rotation for Duck3D
      }, []);
      
      
      
    
    // Effect for the first model (PalmTree3D)
    useEffect(() => {
      initializeScene(palmTreeCanvasRef, PalmTree3D);
    }, []);
    
    // Effect for the second model (Duck3D)
    useEffect(() => {
      initializeScene(duckCanvasRef, Duck3D);
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
  {/* Grid Layout for List and Image */}
<div className="grid grid-cols-1 gap-6 items-start">

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
<li className="flex items-start">
<FaCogs className="text-cyan-500 text-3xl mr-2" />
<div>
<strong>Design integration:</strong> Easily incorporate generated images into your design tools and creative workflows.
</div>
</li>
</ul>
</div>
  <div>
    
              <img
                src={MidJourneyExample}
                alt="Midjourney Example"
                className="w-3/4 mx-auto my-auto rounded-md mb-2 shadow-lg"
              />
                              <h3>Midjourney example with prompt: <span className="text-gray-700">group of students throwing graduation caps in the air celebration, candid, bright colors, realistic, 4k </span> </h3>
              </div>



  {/* Additional Use Cases */}
  <p className="text-lg font-bold text-cyan-600 mt-6">
  Below are a few examples of how this technology can be applied:
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
  <div className="grid grid-col-1 md:grid-cols-2 py-2 gap-4">
   {/* Two Canvases Side by Side */}
          {/* Canvas 1 - PalmTree3D */}
          <div className="w-1/2 mx-auto ">
            <canvas ref={palmTreeCanvasRef} ></canvas>
          </div>

          {/* Canvas 2 - Duck3D */}
          <div className="w-1/2 mx-auto h-1/2">
            <canvas ref={duckCanvasRef} ></canvas>
          </div>
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
      className="w-full shadow-lg rounded-2xl h-auto "
    />
  </div>
  <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
    <FaPenNib className="mr-2" /> Beautiful AI: Design Made Easy
  </h2>
  <p className="text-lg text-gray-800">
    Beautiful AI takes the hassle out of creating presentations with smart templates and design suggestions that ensure professional results. 
    It transforms text, PDFs, or Word documents into visually stunning presentations in just a few clicks, saving hours of manual work.
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

  {/* Expanded Information */}
  <p className="text-lg text-gray-800 mt-6">
    One of the most powerful features of Beautiful AI is its ability to take text, PDFs, or Word documents and instantly turn them into professional slideshows. 
    It simplifies the process of creating presentations, making it easy to design visually appealing slides without needing advanced graphic design skills. 
    From sales pitches to quarterly business reviews, Beautiful AI saves time and effort while ensuring consistency in branding and presentation.
  </p>
  <img
    src={BeautifulAIExample}
    alt="AI slideshow presentations"
    className="w-full mb-8 rounded-md shadow-md"
  />
    <h3 className="py-2 text-gray-900">Beautiful AI Interface  </h3>

  {/* Use Cases */}
  <p className="text-lg text-gray-800 mt-6">
    Businesses can leverage Beautiful AI in numerous ways:
  </p>
  <ul className="space-y-4">
    <li className="flex items-start">
      <FaBullhorn className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>Sales Pitches:</strong> Sales teams can quickly transform their documents into compelling presentations with the click of a button. 
        By uploading sales materials, product brochures, or proposals, Beautiful AI generates a polished deck, ready for meetings with prospective clients.
      </div>
    </li>
    <li className="flex items-start">
      <FaPenNib className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>Internal Reports:</strong> Teams can turn their quarterly reports or business performance documents into easy-to-digest presentations for executive meetings. 
        With Beautiful AI, even complex data or text-heavy reports can be presented in a streamlined, visually engaging manner.
      </div>
    </li>
    <li className="flex items-start">
      <FaClipboardCheck className="text-cyan-500 text-3xl mr-2" />
      <div>
        <strong>Training Materials:</strong> Human resources and training departments can upload Word or PDF training materials and quickly transform them into slideshows for onboarding or employee training sessions. 
        The result is an interactive, visual learning experience for staff that enhances retention.
      </div>
    </li>
  </ul>

  {/* Additional Example */}
  <p className="text-lg text-gray-800 mt-6">
    For example, imagine a marketing agency that needs to prepare a client proposal. Instead of spending hours designing slides from scratch, they can upload their Word document outlining the strategy, 
    and Beautiful AI will automatically convert the content into a beautifully formatted, branded presentation. This not only saves time but also ensures the presentation looks professional and aligned with the company's visual identity.
  </p>
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
    Haiper AI is a versatile tool that leverages artificial intelligence for generating animated explainer videos. Whether you need text-to-video, image-to-video, or want to extend existing videos by a few seconds, Haiper AI makes it simple and efficient to create compelling visual content.
  </p>

  <p className="text-lg text-gray-800">
    The platform’s key strengths include transforming static text or images into engaging videos, automating video production, and integrating voiceovers with ease. Businesses can now convert blogs, articles, or even marketing images into videos without the need for a full production team.
  </p>
  <div className="w-3/5 mx-auto mb-6">
  <video
    src={HaiperVideo} // Replace 'MidJourneyImage' with your imported video variable
    className="w-full shadow-xl rounded-2xl h-auto object-contain"
    autoPlay
    loop
    muted
    controls // You can remove this attribute if you don't want the video controls
  >
    Your browser does not support the video tag.
  </video>
  <h3 className="py-2">Haiper AI example with prompt: <span className="text-gray-700">Mystical mountain temple with waterful </span> </h3>
</div>

  {/* Benefits Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ul className="space-y-4">
      <li className="flex items-start">
        <FaFilm className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>Text-to-Video:</strong> Automatically convert written content, such as blog posts or product descriptions, into animated explainer videos.
        </div>
      </li>
      <li className="flex items-start">
        <FaImage className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>Image-to-Video:</strong> Convert static images into dynamic video formats, adding movement, transitions, and context to your visuals.
        </div>
      </li>
    </ul>
    <ul className="space-y-4">
      <li className="flex items-start">
        <FaClock className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>Extend Existing Videos:</strong> Extend your current video content by adding an extra second or two, making transitions smoother and content more comprehensive.
        </div>
      </li>
      <li className="flex items-start">
        <FaCogs className="text-cyan-500 text-3xl mr-2" />
        <div>
          <strong>Export flexibility:</strong> Export your videos in various formats for use on websites, social media, and other platforms.
        </div>
      </li>
    </ul>
  </div>

  {/* Example Use Case */}
  <p className="text-lg text-gray-800 mt-6">
    For example, an e-commerce company could use Haiper AI to automatically generate video ads from product images. By converting static product photos into video slideshows with transitions, voiceovers, and product descriptions, the company can run engaging social media campaigns with minimal effort. This not only saves time but allows for rapid content creation and deployment at scale.
  </p>
</article>


        </section>

        {/* Conclusion */}
<footer className="mt-16">
  <hr className="mb-8" />
  <p className="text-lg text-gray-800 text-center">
    The AI tools we explored—MidJourney AI, Luma AI, Beautiful AI, and Haiper AI—represent the future of how businesses can streamline their processes, improve creativity, and enhance customer engagement. From generating stunning visuals to automating video creation, these technologies empower companies to scale their efforts with ease.
  </p>
  <p className="text-lg text-gray-800 text-center mt-4">
    By integrating these tools into your daily operations, you not only boost productivity but also stay ahead of industry trends. AI-driven solutions provide the flexibility, precision, and innovation needed to foster growth and ensure your business thrives in a competitive digital landscape.
  </p>

  <p className="text-lg text-gray-800 text-center mt-4">
    Whether you're looking to create high-quality 3D assets, generate engaging marketing content, or optimize your presentation workflows, these AI-powered solutions offer endless possibilities. Embrace the power of AI to elevate your business and unlock new opportunities for success.
  </p>

  <hr className="mt-12" />

  {/* Call-to-Action */}
  <div className="text-center mt-8">
    <p className="text-xl font-semibold text-gray-900">Are You Ready to Transform Your Business with AI?</p>
    <p className="text-lg text-gray-700 mt-2">Contact Shoreline Business Solutions today to learn how we can help you choose the right AI tools and integrate them seamlessly into your business strategy.</p>
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
      <img className="h-16" src={Logo} alt="Shoreline" />
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
