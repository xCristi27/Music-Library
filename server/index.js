const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:2wNfeD5X6mJBGxqd@musiclibrary.a3zz7ca.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res)=>
{
    SongModel.find({})
    .then(song => res.json(song))
    .catch(err => res.json(err))
})

const SongSchema = new mongoose.Schema({
  name: String,
  album: String,
  song: String,
  length: Number,
  description: String
});

const SongModel = mongoose.model('Song', SongSchema);

app.post('/createSong', (req, res) => {
  console.log('Received data:', req.body);  // Log data received from frontend
  SongModel.create(req.body)
    .then(song => {
      console.log('Song created:', song);  // Log created song
      res.json(song);
    })
    .catch(err => {
      console.error('Error creating song:', err);  // Log any error
      res.status(500).json(err);
    });
});

app.put('/updateSong/:id',(req,res)=>{
    const id = req.params.id;
    SongModel.findByIdAndUpdate({_id: id},{
        name: req.body.name,
        album: req.body.album,
        song: req.body.song,
        length: req.body.length,
        description: req.body.description})
    .then(song => res.json(song))
    .catch(err => res.json(err))
})

app.delete('/deleteAlbum/:id', (req, res) =>{
  const id = req.params.id;
  SongModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})


app.get('/getSong/:id', (req,res)=>{
    const id = req.params.id;
    SongModel.findById({_id:id})
    .then(song => res.json(song))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
