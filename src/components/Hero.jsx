import React from 'react'
import "../stylesheets/Hero.css"
const Hero = () => {
  return (
    <div className='content'>
        <div className='text-content'>
            <p>Search the work of best artists</p>
            <div className='input-search'>
                <input type="text" name="name" id="artists" />
                <button>Search</button>
            </div>
        </div>
        <div className='pic'>
            <img src="src\assets\hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero