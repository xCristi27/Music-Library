/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests to backend server

function Albums() {
  const [albums, setAlbums] = useState([]); // State for holding all albums
  const [filteredAlbums, setFilteredAlbums] = useState([]); // State for holding filtered albums (search results)
  const [searchQuery, setSearchQuery] = useState(''); // State for holding text entered in search input

  useEffect(() => {
    axios.get('http://localhost:3001') // When component mounts, make a GET request to backend server to fetch all songs
      .then(result => {
        setAlbums(result.data); // Update state with albums fetched from server response
        setFilteredAlbums(result.data); // Initialize filteredAlbums with all albums (before any search)
      })
      .catch(err => console.log(err)); // Handle errors by logging them to console
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteAlbum/${id}`) // Function for deleting a song based on ID
      .then(res => {
        console.log(res); // Log the response received (usually a success message)
        window.location.reload(); // Reload the page to reflect the song deletion in user interface
      })
      .catch(err => console.log(err)); // Handle errors by logging them to console
  }

  const handleSearch = (event) => {
    const query = event.target.value; // Get the value entered in the search input
    setSearchQuery(query); // Update state with the searched text
    const filtered = albums.filter(album =>
      album.song.toLowerCase().includes(query.toLowerCase()) // Filter albums by song title, ignoring case differences
    );
    setFilteredAlbums(filtered); // Update state with search results (filtered albums)
  }
  return (
    <div className="custom-background">
      <div className="w-50 rounded p-3">
        <h1 className="text-center mb-4">Music Library</h1>
        <Link to="/create" className='btn btn-success'>Add +</Link> 
        <input
          type="text"
          className="form-control my-3"
          placeholder="Search by song title..."
          value={searchQuery}
          onChange={handleSearch} // Search input field for filtering albums by song title
        />
        <div className="table-container"> {/* Container for the table */}
          <table className='table'> {/* Table element with Bootstrap table styles */}
            <thead>  {/* Table header */}
              <tr> {/* Columns for each header */}
                <th>Name</th>
                <th>Album</th>
                <th>Song</th>
                <th>Length</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredAlbums.map(album => (
                     // Mapping through filteredAlbums to display each album as a row in the table
                  <tr key={album._id}>
                    {/* Display each element*/}
                    <td>{album.name}</td>
                    <td>{album.album}</td>
                    <td>{album.song}</td>
                    <td>{album.length}</td>
                    <td>{album.description}</td>
                    <td>
                      <Link to={`/update/${album._id}`} className="btn btn-success">Update</Link> {/* Link to navigate to the create page */}
                      <button className='btn btn-danger'
                        onClick={() => handleDelete(album._id)}>Delete</button> {/* Button to delete a song */}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Albums;
