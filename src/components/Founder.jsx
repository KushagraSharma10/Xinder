import React from 'react'
import "../stylesheets/Founder.css"

const Founder = () => {
  return (
    <div className='founder'>
        <div className='img-div'>
            <img id='video' src="src\assets\video.png" alt="" />
            <img id='playbtn' src="src\assets\play.png" alt="" />
        </div>
        <div className='text-div'>
            <h1>Marie Poirot, Co-Founder <span>Art-Gal</span></h1>
            <p>“Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”</p>
        </div>
    </div>
  )
}

export default Founder