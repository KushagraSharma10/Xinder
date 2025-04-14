import React from 'react'
import "../../public/stylesheets/Hero.css"
import Navbar from './Navbar.jsx'
const Hero = () => {

  const arts = ["Oil painting", "Abstract Art", "Sculpture", "art deco", "pop art"]

  return (
    <div className='content'>
      <Navbar />
      <div className='text-content'>
        <p>Search the work of the best artists</p>
        <div className='search-info'>
          <div className='input-search'>
            <input type="text" name="name" id="artists" placeholder='Search for artists, work name, or category' />
            <img id='search' src="../../public/images/search.png" alt="" />
            <button>Search</button>
          </div>
          <div className='arts'>
            {arts.map((art, index) => {
              return <div key={index} className='art'>{art}</div>
            })}
          </div>
        </div>
      </div>
      <div className='pic'>
        <div className='image'>
        <img src="../../public/images/hero.png" alt="" />
        </div>
        <img id='traced' src="../../public/images/traced.png" alt="" />
      </div>
    </div>
  )
}

export default Hero