require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const animalRoutes = require('./routes/animals');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const adoption = require('./routes/adoption');

const PORT = process.env.PORT || 4000;

// express app
const app = express();

// Enable CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://bliss-foundation.vercel.app'], // your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // only needed if using cookies/auth headers
}));

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Bliss Foundation API is running!');
});

// routes
app.use('/api/animals', animalRoutes);

app.use('/api/auth', authRoutes)

app.use('/api/user', userRoutes);

app.use('/api/adoptions', adoption);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to db and Server is running on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });