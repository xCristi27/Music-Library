/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' //Import Bootstrap styles
import Albums from './Albums' //Import Albums component to display list of albums
import CreateAlbum from './CreateAlbums' // Import CreateAlbum component for adding new songs
import UpdateAlbum from './UpdateAlbums' // Import UpdateLabum component for updating existing songs

function App() {
  const [count, setCount] = useState(0)

  return (
    // Creating the routing elements
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Albums/>}></Route> {/* Route for displaying Albums component */}
          <Route path='/create' element={<CreateAlbum/>}></Route>{/* Route for displaying CreateAlbum component */}
          <Route path='/update/:id' element={<UpdateAlbum/>}></Route>{/* Route for displaying UpdateAlbum component with dynamic ID */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
