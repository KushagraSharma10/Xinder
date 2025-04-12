import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companies from './components/Companies'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Companies />
    </div>
  )
}

export default App