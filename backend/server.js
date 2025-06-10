require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const animalRoutes = require('./routes/animals')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/uploads', express.static('public/uploads'));

// routes
app.use('/api/animals', animalRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests only after successful connection
    app.listen(process.env.PORT,() => {
        console.log('Connected to db and Server is running on port 4000!')
    })
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error)
  })

