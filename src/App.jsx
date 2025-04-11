import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App