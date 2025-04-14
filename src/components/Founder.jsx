import React from 'react'
import "../../public/stylesheets/Founder.css"

const Founder = () => {
    return (
        <div className='founder'>
            <div className='inside'>
                <img id='left' src="/images/leftBtn.png" alt="" />
                <img id='right' src="/images/rightBtn.png" alt="" />
                <div className='img-div'>
                    <img id='video' src="/images/video.png" alt="" />
                    <img id='playbtn' src="/images/play.png" alt="" />
                </div>
                <div className='text-div'>
                    <h1>Marie Poirot, Co-Founder <span>Art-Gal</span></h1>
                    <p>“Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”</p>
                </div>
            </div>
        </div>
    )
}

export default Founder