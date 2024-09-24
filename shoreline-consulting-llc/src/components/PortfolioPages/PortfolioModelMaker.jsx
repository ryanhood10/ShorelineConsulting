import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import ModelMakerHeader from '../../assets/PortfolioPictures/ModelMakerHeader.png'; 
import ModelMakerDashboard from '../../assets/PortfolioPictures/ModelMakerDashboard.png'; 
import { FaCube, FaCloudUploadAlt, FaCogs, FaQuestionCircle } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';
import Duck3D from '../../assets/BlogPictures/Duck3DModel.glb';
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const PortfolioModelMaker = () => {


    const duckCanvasRef = useRef(null);
    
    const initializeScene = (canvasRef, modelPath = false, shouldRotateDuck = true) => {
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
            gltf.scene.rotation.y = -Math.PI / 2; // Rotate 90 degrees clockwise
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
      

 // Initialize the duck model with 90-degree clockwise rotation
 useEffect(() => {
    initializeScene(duckCanvasRef, Duck3D, true); // Pass true to apply rotation for Duck3D
  }, []);
  
  
  

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-lg shadow-xl relative">
        {/* Back to Portfolio Link */}
        <Link
          to="/Portfolio"
          className="absolute top-4 left-4 flex items-center text-blue-600 hover:text-blue-500 transition duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a.75.75 0 0 1-.53-.22l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06L4.81 10h13.44a.75.75 0 0 1 0 1.5H4.81l5.72 5.72a.75.75 0 0 1-.53 1.28z"
              clipRule="evenodd"
            />
          </svg>
          Portfolio
        </Link>

        {/* Portfolio Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            3D Model Maker - Bringing Luma AI’s Dream Machine to Everyone
          </h1>
          <p className="text-gray-600 text-lg">
            Create stunning 3D models from video scans with our custom-built interface that leverages Luma AI’s cutting-edge technology.
          </p>
          <img
            src={ModelMakerHeader}
            alt="3D Model Maker Header"
            className="w-full rounded-md shadow-lg mt-8"
          />
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              The 3D Model Maker project was developed in collaboration with Luma AI to make their "Dream Machine" technology accessible to everyday users. Previously available only to developers, our custom interface allows users to upload video scans and quickly generate high-quality 3D models. These models can be used in gaming, web design, and more, democratizing access to advanced 3D modeling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={ModelMakerDashboard}
                alt="Model Maker Dashboard"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Custom interface built with React, TailwindCSS, Express, and Python.</li>
                <li>Allows users to create 3D models from simple video scans of objects or scenes.</li>
                <li>Designed to be accessible to non-developers, expanding the reach of Luma AI’s technology.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Upload Your Scan and Generate Models */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCloudUploadAlt className="mr-2" /> Upload Your Scan and Generate Models
            </h2>
            <p className="text-lg text-gray-800">
              Users can upload a video of any object or scene, and within minutes, our app constructs a detailed 3D model. The process is intuitive and guided, allowing anyone to create high-quality 3D assets suitable for various applications, such as gaming, virtual reality, and web use.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Easy-to-use upload system for video scans.</li>
              <li>Supports API keys from Luma AI, allowing up to 10 free uses or more with paid accounts.</li>
              <li>Delivers models within minutes, perfect for rapid prototyping and creative projects.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 2: Best Practices for Scanning */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaQuestionCircle className="mr-2" /> Best Practices for Scanning
            </h2>
            <p className="text-lg text-gray-800">
              To ensure the best results, we’ve created a “Best Practices” guide that helps users understand how to capture optimal scans. This page provides tips on camera angles, lighting, and object positioning to maximize the quality of the 3D models produced.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Guidance on achieving the best results from your scans.</li>
              <li>Instructions on proper lighting, angles, and scanning techniques.</li>
              <li>Ensures high fidelity and accuracy in the generated 3D models.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Real-World Application Examples */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCube className="mr-2" /> Real-World Application Examples
            </h2>
            <p className="text-lg text-gray-800">
              The 3D models created can be used in various fields, from virtual reality and augmented reality to product visualization and gaming. This flexibility allows users to explore new creative avenues and bring digital replicas of real-world objects to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
             
  {/* Canvas 2 - Duck3D */}
  <div className="w-full h-[250px] mx-auto md:w-1/2">
    <canvas ref={duckCanvasRef}></canvas>
    <h3 className="py-2 text-gray-700">Luma AI 3D Model</h3>

  </div>
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Used in game design, virtual stores, animations, and immersive experiences.</li>
                <li>Perfect for creating digital twins of real-world objects.</li>
                <li>Versatile use cases across various industries, including e-commerce and education.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 4: How to Run the Project */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCogs className="mr-2" /> How to Run the Project
            </h2>
            <p className="text-lg text-gray-800">
              Follow these steps to set up and run the 3D Model Maker project:
            </p>
            <ul className="list-disc ml-6 text-lg text-start space-y-2">
            <li>Go to the app at <a className='text-blue-600 hover:text-blue-500' href="https://ai-3d-model-maker-6bb8a109b792.herokuapp.com/">https://ai-3d-model-maker-6bb8a109b792.herokuapp.com/. </a></li>
            <li>Visit the “Best Practices” page to learn how to make high-quality video scans for optimal results.</li>
            <li>Obtain an API Key by signing up for an account on Luma AI (linked in app).</li>
            <li>Upload your video with the api key, and within minutes you will have your 3D model.</li>

            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Our 3D Model Maker with Luma AI brings advanced modeling capabilities to anyone with a smartphone. Create, innovate, and explore the possibilities with custom 3D models tailored to your needs.
          </p>
          <p className="text-lg text-gray-800 text-center mt-4">
            Contact Shoreline Business Solutions today to learn how we can help integrate Luma AI’s 3D modeling technology into your business or project.
          </p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 mt-4"
          >
            Get in Touch
          </a>

          {/* Company Branding */}
          <div className="mt-12 flex items-center justify-center">
            <img className="h-16" src={Logo} alt="Shoreline" />
            <p className="text-gray-600">&copy; 2024 Shoreline Business Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioModelMaker;
