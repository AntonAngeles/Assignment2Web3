//import { useState } from 'react'
import './App.css'
import Login from './components/LoginView/Login'
import Gallery from './components/GalleryView/Gallery'
import Artist from './components/ArtistView/Artist'
import Genre from './components/GenreView/Genre'
import Painting from './components/Painting'
import PaintingDetails from './components/PaintingDetails'
import Favorites from './components/Favorite'
import {Routes, Route} from 'react-router'

// We need to require the use of conditional rendering in order
// for us to be able navigate through the different views

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/artist" element={<Artist />}/>
        <Route path="/genre" element={<Genre />}/>
        <Route path="/painting" element={<Painting />}/>
        <Route path="/paintingdetails" element={<PaintingDetails />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
  )
}

export default App
