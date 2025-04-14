import React from 'react'
import "../stylesheets/Art.css"

const Art = () => {

    const Art_cards = [
        { tag: "Featured", pic: "images/Art1.png", para: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.", name: "Wild horse Event", tag_Bgcolor: "#F3E8FF", tag_color: "#6B21A8" },
        { tag: "New", pic: "images/Art2.png", para: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.", name: "Great color", tag_Bgcolor: "#DCFCE7", tag_color: "#166534" },
        { tag: "Coming Soon", pic: "images/Art3.png", para: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.", name: "Happy Father's day", tag_Bgcolor: "#FEF9C3", tag_color: "#854D0E" },


    ]

    return (
        <div className='Arts'>
            <div className='Art-headings'>
                <h1>Art Events</h1>
                <div className='Art-view'>
                    <a href="">Explore All Events</a>
                    <img src="images/arrow-right.png" alt="" />
                </div>
            </div>
            <div className='Art-cards'>
                {Art_cards.map((Art,index) => {
                    return (
                        <div key={index} className='Art-card'>
                            <div className='art-img'>
                                <img src={Art.pic} alt="" />
                            </div>
                            <div className='art-info'>
                                <h1>{Art.name}</h1>
                                <p>{Art.para}</p>
                            </div>
                            <div style={{ backgroundColor: Art.tag_Bgcolor, color: Art.tag_color }} className="art-tag">
                                {Art.tag}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Art