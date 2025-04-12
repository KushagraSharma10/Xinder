import React from 'react'
import "./App.css"

import Hero from './components/Hero'
import Companies from './components/Companies'

const App = () => {
  return (
    <div className='container'>
      
      <Hero />
      <Companies />
    </div>
  )
}

export default App