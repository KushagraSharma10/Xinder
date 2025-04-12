import React from 'react'
import "../stylesheets/Masterpiece.css"

const Masterpiece = () => {

    const Latest_cards = [
        { tag: "Promoted", pic: "src/assets/latest1.png", profilePic: "src/assets/pf1.png", author: "Malvina Spring", name: "Flower Decorations" },
        { tag: "Featured", pic: "src/assets/latest2.png", profilePic: "src/assets/pf2.png", author: "Malvina Spring", name: "Flower Decorations" },
        { tag: "Promoted", pic: "src/assets/latest3.png", profilePic: "src/assets/pf3.png", author: "Rwanda Melflor", name: "Splash" },
        { tag: "Promoted", pic: "src/assets/latest4.png", profilePic: "src/assets/pf4.png", author: "Malvina Spring", name: "Colorful Face" },
        { tag: "Promoted", pic: "src/assets/latest5.png", profilePic: "src/assets/pf5.png", author: "Malvina Spring", name: "Fence Spying" },

    ]

    return (
        <div className='latest'>
            <div className='latest-headings'>
                <h1>Latest Masterpieces</h1>
                <div className='discover'>
                    <a href="">Discover more Masterpieces</a>
                    <img src="src/assets/arrow-right.png" alt="" />
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
                            <div className='card-tag'>{latest_card.tag}</div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Masterpiece