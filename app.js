const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const profileRoutes = require('./routes/profiles')

const app = express();
const PORT = 5000;

// MongoDB connection string
const mongoURI = 'mongodb+srv://Hari_Om_29:Hariom%40123@nodetuts.2ljbi.mongodb.net/?retryWrites=true&w=majority&appName=Nodetuts';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
// Useing middleware to parse the data of input that while post request data is accessed without error , used 
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/' , profileRoutes)
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
