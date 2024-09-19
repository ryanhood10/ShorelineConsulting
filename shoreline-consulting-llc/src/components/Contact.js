import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { validateEmail } from "../utils/validators";
import { Link } from "react-router-dom";
import Stamp from '../assets/SquareStampLogo.png'

function useVisible(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
}

const fields = ["name", "email", "message"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    fields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Input field is required.";
      } else if (field === "email" && !validateEmail(formData[field])) {
        newErrors[field] = "Invalid email address.";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const emailData = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        };
        try {
          const response = await axios.post(
            "https://ryans-portfolio.herokuapp.com/contact",
            emailData
          );
          alert(response.data.message);
        } catch (error) {
          if (error.response) {
            console.error("Response Error:", error.response.data);
          } else if (error.request) {
            console.error("Request Error:", error.request);
          } else {
            console.error("Error:", error.message);
          }
          alert("Failed to send email.");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to send email.");
      }
    }
  };

  const [newsletterRef, newsletterVisible] = useVisible();

  const animationClasses = (isVisible) =>
    `transform transition-all duration-1000 ease-in-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`;

  return (
    <div
    ref={newsletterRef}
    className={`w-full py-2 sm:py-3 md:py-4 lg:py-6 xl:py-12 px-4 text-white ${animationClasses(newsletterVisible)} bg-gradient-to-r from-gray-900 via-cyan-950 to-gray-900`}
  >
    <div className="max-w-4xl mx-auto">
      {/* Image and Text Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        {/* Stamp Image - Hidden on mobile */}
        <div className="w-full md:w-1/3 hidden md:block">
          <img
            src={Stamp}
            alt="Technology Solutions"
            className="w-full h-auto rounded-lg"
          />
        </div>
  
        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl my-4">
            Ready to start your journey?
          </h1>
          <p className="text-md md:text-lg mb-4">
            See how we can leverage technology to improve your business and save you time!
          </p>
        </div>
      </div>
  
      {/* Form Section - Unaffected */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 md:p-8 mt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-xl text-center mb-4">Contact</h1>
          {fields.map((field) => (
            <div key={field} className="flex flex-col">
              <label htmlFor={field} className="mb-2 font-medium">
                {field[0].toUpperCase() + field.slice(1)}:
              </label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  className="p-3 w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                />
              ) : (
                <textarea
                  placeholder="Message"
                  className="p-3 min-h-[100px] w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              )}
              {errors[field] && (
                <span className="text-xs text-red-600 mt-1">
                  {errors[field]}
                </span>
              )}
            </div>
          ))}
          <button
            aria-label="submit info"
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-md py-3 text-white transition duration-300 ease-in-out"
          >
            Send Email
          </button>
        </form>
      </div>
  
      {/* Footer Link */}
      <p className="text-center text-sm md:text-base my-6">
        Learn more about our established techniques on our{" "}
        <Link to="/solutions" className="text-blue-500 hover:text-blue-400">
          Solutions
        </Link>{" "}
        page.
      </p>
    </div>
  </div>
  


  );
};

export default Contact;
