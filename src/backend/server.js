const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(express.json());  // For parsing JSON
app.use(express.urlencoded({ extended: true }));  // For parsing form data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Import Routes
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
