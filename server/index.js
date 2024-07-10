const express = require('express'); // Import Express module to create and manage HTTP server
const mongoose = require('mongoose'); // Import Mongoose module for interacting with MongoDB
const cors = require('cors'); // Middleware for handling CORS

const app = express(); // Create an Express application
app.use(cors()); // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse request bodies as JSON

mongoose.connect('mongodb+srv://admin:2wNfeD5X6mJBGxqd@musiclibrary.a3zz7ca.mongodb.net/')
  .then(() => console.log('Connected to MongoDB')) // Connect to MongoDB
  .catch(err => console.error('Could not connect to MongoDB', err)); // Handle error if connection fails

const SongSchema = new mongoose.Schema({
  name: String,
  album: String,
  song: String,
  length: Number,
  description: String
}); // Define schema for the 'songs' collection in MongoDB

const SongModel = mongoose.model('Song', SongSchema); // Create Mongoose model for operations on 'songs' collection

app.get('/', (req, res) => {
  SongModel.find({}) // GET endpoint to fetch all songs from MongoDB collection
    .then(song => res.json(song)) // Return fetched songs as JSON response
    .catch(err => res.json(err)); // Handle errors and return them as JSON response
});

app.post('/createSong', (req, res) => {
  SongModel.create(req.body) // POST endpoint to create a new song based on data received in request body
    .then(song => res.json(song)) // Return created song as JSON response
    .catch(err => res.status(500).json(err)); // Handle errors and return them with a 500 status code
});

app.put('/updateSong/:id', (req, res) => {
  const id = req.params.id;
  SongModel.findByIdAndUpdate({ _id: id }, req.body) // PUT endpoint to update an existing song based on ID
    .then(song => res.json(song)) // Return updated song as JSON response
    .catch(err => res.json(err)); // Handle errors and return them as JSON response
});

app.delete('/deleteAlbum/:id', (req, res) => {
  const id = req.params.id;
  SongModel.findByIdAndDelete({ _id: id }) // DELETE endpoint to delete a song based on ID
    .then(res => res.json(res)) // Return delete response as JSON
    .catch(err => res.json(err)); // Handle errors and return them as JSON response
});

app.get('/searchAlbums', (req, res) => {
  const searchText = req.query.text; // GET endpoint to search albums by title
  SongModel.find({ album: { $regex: searchText, $options: 'i' } }) // Use regex to search albums containing the specified text, case-insensitive
    .then(albums => res.json(albums)) // Return search results as JSON response
    .catch(err => res.status(500).json(err)); // Handle errors and return them with a 500 status code
});

app.get('/getSong/:id', (req, res) => {
  const id = req.params.id;
  SongModel.findById({ _id: id }) // GET endpoint to get a specific song by ID
    .then(song => res.json(song)) // Return found song as JSON response
    .catch(err => res.json(err)); // Handle errors and return them as JSON response
});

app.listen(3001, () => {
  console.log('Server is running on port 3001'); // Listen on port 3001 and log a message when server starts
});
