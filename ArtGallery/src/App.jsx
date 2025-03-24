//import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import {Routes, Route} from 'react-router'

// We need to require the use of conditional rendering in order
// for us to be able navigate through the different views

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" />
      </Routes>
    </main>
  )
}

export default App
