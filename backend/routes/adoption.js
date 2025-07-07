const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Adoption = require('../models/adoptionModel');

// GET all adoptions
router.get('/', async (req, res) => {
  try {
    const adoptions = await Adoption.find().sort({ createdAt: -1 });
    res.json(adoptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { name, email, phone, message, animalName } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email to team
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFY_EMAIL,
    subject: `Adoption Interest: ${animalName}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Animal: ${animalName}
      Message: ${message}
    `
  };

  // Thank you email to user
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thank you for your interest in adopting ${animalName}!`,
    text: `
      Dear ${name},

      Thank you for showing interest in adopting ${animalName} from Bliss Foundation!
      Our team will contact you soon to schedule your appointment and share further details.

      If you have any questions, feel free to reply to this email.

      Warm regards,
      Bliss Foundation Team
    `
  };

  try {
    // Save adoption interest to DB
    await Adoption.create({ name, email, phone, message, animalName });

    await transporter.sendMail(mailOptions);      // Email to team
    await transporter.sendMail(userMailOptions);  // Thank you email to user
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;