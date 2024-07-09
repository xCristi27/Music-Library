/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Button Add + go to create album interface
function Albums (){
    const [Albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setAlbums(result.data) )
        .catch(err => console.log(err))
    })
    return(
        <div className ="d-flex vh-100  bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link> 
                <table className='table'>
                    <thead>
                        <tr>
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
                            //Getting elements for each collumn of the table
                            Albums.map((Album) => { 
                               return <tr>
                                    <td>{Album.name}</td>
                                    <td>{Album.album}</td>
                                    <td>{Album.song}</td>
                                    <td>{Album.length}</td>
                                    <td>{Album.description}</td>
                                    <td>
                                    <Link to={`/update/${Album._id}`} className="btn btn-success">Update</Link>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
            </table>
            </div>
        </div>
    )
}

export default Albums;