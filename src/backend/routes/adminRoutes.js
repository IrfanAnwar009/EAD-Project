// /routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Image = require('../models/Image');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Admin Authentication Middleware
const checkAdminAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Access denied');
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send('Invalid token');
    req.admin = decoded;
    next();
  });
};

// Admin Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = { username: 'admin', password: 'admin123' }; // Replace with DB check

  if (username === admin.username && bcrypt.compareSync(password, admin.password)) {
    const token = jwt.sign({ username: admin.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Image Management Routes
router.post('/images/upload', checkAdminAuth, upload.single('image'), async (req, res) => {
  const newImage = new Image({
    title: req.body.title,
    url: `/images/${req.file.filename}`,
  });

  await newImage.save();
  res.json({ success: true, image: newImage });
});

router.delete('/images/:id', checkAdminAuth, async (req, res) => {
  const imageId = req.params.id;
  const image = await Image.findByIdAndDelete(imageId);
  
  if (image) {
    res.json({ success: true });
  } else {
    res.status(404).send('Image not found');
  }
});

module.exports = router;
