import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { validateEmail } from "../utils/validators";
import { Link } from "react-router-dom";
import Stamp from "../assets/SquareStampLogo.png";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    if (!recaptchaToken)
      newErrors.recaptcha = "Please verify you're not a robot.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.post(
          "https://www.shorelinebusiness.solutions/contact",
          { ...formData, recaptchaToken }
        );
        setSuccessMessage("Thank you! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredContact: "email",
        });
        setRecaptchaToken(null);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to send message. Please try again later.");
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
      className={`w-full py-2 sm:py-3 md:py-4 lg:py-6 xl:py-12 px-4 text-white ${animationClasses(
        newsletterVisible
      )} bg-gradient-to-r from-gray-900 via-cyan-950 to-gray-900`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/3 hidden md:block">
            <img
              src={Stamp}
              alt="Technology Solutions"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl my-4">
              Ready to start your journey?
            </h1>
            <p className="text-md md:text-lg mb-4">
              See how we can leverage technology to improve your business and
              save you time!
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 md:p-8 mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-xl text-center mb-4">Contact</h1>
            <div className="flex flex-col">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="p-3 w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <span className="text-xs text-red-600 mt-1">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="p-3 w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <span className="text-xs text-red-600 mt-1">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="p-3 w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <span className="text-xs text-red-600 mt-1">{errors.phone}</span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <label className="font-medium">Preferred Contact:</label>
              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Phone
              </label>
            </div>
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="What can we help you with?"
                className="p-3 min-h-[100px] w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && (
                <span className="text-xs text-red-600 mt-1">
                  {errors.message}
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LczU4AqAAAAANzW92fodO5fmLu5rOWwzuBxGANj"
                onChange={handleRecaptchaChange}
              />
            </div>
            {errors.recaptcha && (
              <span className="text-xs text-red-600 mt-1">
                {errors.recaptcha}
              </span>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-md py-3 text-white"
            >
              Send Message
            </button>
          </form>
          {successMessage && (
  <p className="text-green-600 text-center">{successMessage}</p>
)}

        </div>
        <p className="text-center text-sm my-6">
          Learn more about our services on our{" "}
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
