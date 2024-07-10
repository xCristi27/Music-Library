/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // Import necessary hooks and components from React
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import hook for navigation

function CreateAlbum() {
  const [name, setName] = useState(''); // State variables for storing input field values
  const [album, setAlbum] = useState('');
  const [song, setSong] = useState('');
  const [length, setLength] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // Hook for navigation between routes

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createSong', { name, album, song, length, description }) // Send new song data to server for creation
      .then(result => {
        console.log(result); // Log the result received from server (for debugging)
        navigate('/'); // Navigate back to the home page after successful creation
      })
      .catch(err => console.log(err)); // Log any errors that occur during the request
  };

  return (
    <div className="custom-background">
       <div className="w-50 rounded p-3">
        <form onSubmit={submit}>
          <h2>Add Song</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" onChange={(e) => setName(e.target.value)} /> {/* Input field for song name */}
          </div>
          <div className="mb-2">
            <label htmlFor="">Album</label>
            <input type="text" placeholder="Enter Album" className="form-control" onChange={(e) => setAlbum(e.target.value)} /> {/* Input field for album name */}
          </div>
          <div className="mb-2">
            <label htmlFor="">Song</label>
            <input type="text" placeholder="Enter Song" className="form-control" onChange={(e) => setSong(e.target.value)} /> {/* Input field for song title */}
          </div>
          <div className="mb-2">
            <label htmlFor="">Length</label>
            <input type="number" step="0.1" placeholder="Enter Length" className="form-control" onChange={(e) => setLength(parseFloat(e.target.value))} /> {/* Input field for song length */}
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input type="text" placeholder="Enter Description" className="form-control" onChange={(e) => setDescription(e.target.value)} /> {/* Input field for song description */}
          </div>
          <button className="btn btn-success">Submit</button> {/* Button to submit new song details */}
        </form>
      </div>
    </div>
  );
}

export default CreateAlbum;
