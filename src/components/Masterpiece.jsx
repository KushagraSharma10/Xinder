import React from 'react'
import "../stylesheets/Masterpiece.css"

const Masterpiece = () => {

    const Latest_cards = [
        { tag: "Promoted", pic: "images/latest1.png", profilePic: "images/pf1.png", author: "Malvina Spring", name: "Flower Decorations" },
        { tag: "Featured", pic: "images/latest2.png", profilePic: "images/pf2.png", author: "Malvina Spring", name: "Flower Decorations" },
        { tag: "", pic: "images/latest3.png", profilePic: "images/pf3.png", author: "Rwanda Melflor", name: "Splash" },
        { tag: "", pic: "images/latest4.png", profilePic: "images/pf4.png", author: "Malvina Spring", name: "Colorful Face" },
        { tag: "", pic: "images/latest1.png", profilePic: "images/pf5.png", author: "Malvina Spring", name: "Fence Spying" },

    ]

    return (
        <div className='latest'>
            <img id='left' src="images/leftBtn.png" alt="" />
            <img id='right' src="images/rightBtn.png" alt="" />
            <div className='latest-headings'>
                <h1>Latest Masterpieces</h1>
                <div className='discover'>
                    <a href="">Discover more Masterpieces</a>
                    <img src="images/arrow-right.png" alt="" />
                </div>
            </div>
            <div className='latest-cards'>
                {Latest_cards.map((latest_card, index) => {
                    return (
                        <div key={index} className='latest-card'>
                            <div className='card-img'>
                                <img src={latest_card.pic} alt="" />
                            </div>
                            <div className='card-info'>
                                <div className='profile'>
                                    <img src={latest_card.profilePic} alt="" />
                                </div>
                                <div className='profile-info'>
                                    <h1>{latest_card.name}</h1>
                                    <p>by {latest_card.author}</p>
                                </div>
                            </div>
                            {latest_card?.tag && (
                                <div className='card-tag'>{latest_card.tag}</div>
                            )}
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Masterpiece