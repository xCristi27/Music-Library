/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function CreateAlbum() {
  const [name, setName] = useState('');
  const [album, setAlbum] = useState('');
  const [song, setSong] = useState('');
  const [length, setLength] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createSong', { name, album, song, length, description })
      .then(result => {
      console.log(result)
      navigate('/')
  })
      .catch(err => console.log(err));
  };

  return (
    <div className="custom-background">
       <div className="w-50 rounded p-3">
        <form onSubmit={submit}>
          <h2>Add Song</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Album</label>
            <input type="text" placeholder="Enter Album" className="form-control" onChange={(e) => setAlbum(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Song</label>
            <input type="text" placeholder="Enter Song" className="form-control" onChange={(e) => setSong(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Length</label>
            <input type="number" step="0.1" placeholder="Enter Length" className="form-control" onChange={(e) => setLength(parseFloat(e.target.value))} />
            </div>

          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input type="text" placeholder="Enter Description" className="form-control" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAlbum;
