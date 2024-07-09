/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Albums from './Albums'
import CreateAlbum from './CreateAlbums'
import UpdateAlbum from './UpdateAlbums'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Creating the routing elements
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Albums/>}></Route>
          <Route path='/create' element={<CreateAlbum/>}></Route>
          <Route path='/update/:id' element={<UpdateAlbum/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
