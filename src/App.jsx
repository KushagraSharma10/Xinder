import React from 'react'
import "./App.css"

import Hero from './components/Hero'
import Companies from './components/Companies'
import Featured from './components/Featured'
import Masterpiece from './components/Masterpiece'

const App = () => {
  return (
    <div className='container'>
      
      <Hero />
      <Companies />
      <Featured />
      <Masterpiece />
    </div>
  )
}

export default App