/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react"; // Import necessary hooks and components from React
import { useParams, useNavigate } from "react-router-dom"; // Import hooks for accessing URL parameters and navigation
import axios from "axios"; // Import Axios for making HTTP requests

function UpdateAlbum (){
    const {id} = useParams(); // Extract the 'id' parameter from the URL using useParams hook
    const [name, setName] = useState(''); // State variables for storing input field values
    const [album, setAlbum] = useState('');
    const [song, setSong] = useState('');
    const [length, setLength] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate(); // Hook for navigation between routes

    useEffect(() => {
        axios.get('http://localhost:3001/getSong/' + id) // Fetch song data from server based on ID when component mounts
        .then(result => {
            console.log(result); // Log the result received from server (for debugging)
            // Update state with song data received from server response
            setName(result.data.name);
            setAlbum(result.data.album);
            setSong(result.data.song);
            setLength(result.data.length);
            setDescription(result.data.description);
        })
        .catch(err => console.log(err)); // Log any errors that occur during the request
    }, []);

    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/updateSong/' + id, { name, album, song, length, description }) // Send updated song data to server for update
          .then(result => {
              console.log(result); // Log the result received from server (for debugging)
              navigate('/'); // Navigate back to the home page after successful update
          })
          .catch(err => console.log(err)); // Log any errors that occur during the request
    }

    return(
        <div className="custom-background">
         <div className="w-50 rounded p-3">
            <form onSubmit={Update}>
                <h2>Update Song</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control'
                    value ={name} onChange={(e) => setName(e.target.value)}/>  {/* Input field for song name */}
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Album</label>
                    <input type="text" placeholder='Enter Album' className='form-control'
                    value={album} onChange={(e) => setAlbum(e.target.value)}/> {/* Input field for album name */}
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Song</label>
                    <input type="text" placeholder='Enter Song' className='form-control'
                    value={song} onChange={(e) => setSong(e.target.value)}/> {/* Input field for song title */}
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Length</label>
                    <input type="text" placeholder='Enter Length' className='form-control'
                    value={length} onChange={(e) => setLength(e.target.value)}/> {/* Input field for song length */}
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='Enter Description' className='form-control'
                    value={description} onChange={(e) => setDescription(e.target.value)}/> {/* Input field for song description */}
                </div>
                <button className='btn btn-success'>Update</button> 
            </form>
        </div>
    </div>
    )
}

export default UpdateAlbum;
