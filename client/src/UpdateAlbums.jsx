/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateAlbum (){
    const {id} = useParams()
    const [name, setName] = useState('');
    const [album, setAlbum] = useState('');
    const [song, setSong] = useState('');
    const [length, setLength] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getSong/'+id) //getSong????
        .then(result => {console.log(result) 
            setName(result.data.name)
            setAlbum(result.data.album)
            setSong(result.data.song)
            setLength(result.data.length)
            setDescription(result.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    const Update =(e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/updateSong/'+id, { name, album, song, length, description })
          .then(result => {
          console.log(result)
          navigate('/')
      })
          .catch(err => console.log(err));
        
    }

    return(
        <div className ="d-flex vh-100  bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Update Song</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control'
                    value ={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Album</label>
                    <input type="text" placeholder='Enter Album' className='form-control'
                    value={album} onChange={(e) => setAlbum(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Song</label>
                    <input type="text" placeholder='Enter Song' className='form-control'
                    value={song} onChange={(e) => setSong(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Length</label>
                    <input type="text" placeholder='Enter Length' className='form-control'
                    value={length} onChange={(e) => setLength(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='Enter Description' className='form-control'
                    value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
    )
}

export default UpdateAlbum;