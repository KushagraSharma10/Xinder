import React from 'react'
import "../stylesheets/Hero.css"
const Hero = () => {

  const arts = ["Oil painting", "Abstract Art", "Sculpture", "art deco", "pop art"]

  return (
    <div className='content'>
      <div className='text-content'>
        <p>Search the work of the best artists</p>
        <div className='search-info'>
          <div className='input-search'>
            <input type="text" name="name" id="artists" placeholder='Search for artists, work name, or category' />
            <img id='search' src="src\assets\search.png" alt="" />
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
        <img src="src\assets\hero.png" alt="" />
        </div>
        <img id='traced' src="src\assets\traced.png" alt="" />
      </div>
    </div>
  )
}

export default Hero