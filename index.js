const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes'); // Import product routes
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const port = 3000;
// Use CORS middleware
app.use(cors());
// Middleware to parse JSON
app.use(bodyParser.json());

// Replace with your MongoDB connection string
mongoose.connect('mongodb+srv://montriduangkrut:mJl7MuRR8qxmdFHr@cluster0.rth7atc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


// Use product routes
app.use('/api', productRoutes);
app.use('/api/auth', authRoutes); 

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


