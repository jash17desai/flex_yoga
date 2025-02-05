const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// MongoDB connection string (for local MongoDB)
const dbUrl = 'mongodb://localhost:27017/flex_yoga';

// Connect to MongoDB using Mongoose
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB database flex_yoga'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Body parser middleware to parse JSON requests
app.use(express.json());

// Define a basic endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Flex Yoga API!');
});

// POST endpoint to register a user
app.post('/api/register', async (req, res) => {
  const { name, age, batch } = req.body;

  if (!name || !age || !batch) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Assuming you already created a "User" model
  const newUser = new User({ name, age, batch });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
