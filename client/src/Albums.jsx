/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
//Button Add + go to create album interface
function Albums (){
    const [Albums, setAlbums] = useState([{
       Name: "Donald", Album: "Rock me baby", Song:"Mettal", Length: 3.23, Description: "the best metal song"   
    }])
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
                                    <td>{Album.Name}</td>
                                    <td>{Album.Album}</td>
                                    <td>{Album.Song}</td>
                                    <td>{Album.Length}</td>
                                    <td>{Album.Description}</td>
                                    <td>
                                    <Link to="/update" className='btn btn-success'>Update</Link> 
                                        <button>Delete</button>
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