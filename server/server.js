const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app (inside the 'shoreline-consulting-llc/build' folder)
app.use(express.static(path.join(__dirname, '..', 'shoreline-consulting-llc', 'build')));

// Send email endpoint
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message, recaptchaToken } = req.body;

    // Step 1: Verify reCAPTCHA
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY, // Add this key to your .env file
          response: recaptchaToken,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }

    // Step 2: Send email
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'connect@akirawebsolutions.com',
      subject: 'ShorlineConsultingLLC - Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'shoreline-consulting-llc', 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
