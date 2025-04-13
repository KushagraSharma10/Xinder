import React from 'react'
import "./App.css"

import Hero from './components/Hero'
import Companies from './components/Companies'
import Featured from './components/Featured'
import Masterpiece from './components/Masterpiece'
import Services from './components/Services'
import Explore from './components/Explore'
import Founder from './components/Founder'
import Art from './components/Art'

const App = () => {
  return (
    <div className='container'>
      
      <Hero />
      <Companies />
      <Featured />
      <Masterpiece />
      <Services />
      <Explore />
      <Founder />
      <Art />
    </div>
  )
}

export default App