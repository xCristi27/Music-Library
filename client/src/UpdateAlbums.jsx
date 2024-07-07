/* eslint-disable no-unused-vars */
import React from "react";

function UpdateAlbum (){
    return(
        <div className ="d-flex vh-100  bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <form>
                <h2>Update Song</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Album</label>
                    <input type="text" placeholder='Enter Album' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Length</label>
                    <input type="text" placeholder='Enter Length' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='Enter Description' className='form-control'/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
    )
}

export default UpdateAlbum;