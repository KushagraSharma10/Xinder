import React from 'react'
import "../stylesheets/Incredible.css"
const Incredible = () => {   

const images = [
    { title: "Splash", image: "images/latest3.png", profile_pic:"images/pf3.png" },
    { title: "Colorful Face", image: "images/latest4.png" ,profile_pic:"images/pf4.png" },
    { title: "Fill", image: "images/Spying.png" ,profile_pic:"images/pf5.png" },
  ];

    return (
        <div className='incredible'>
            <div className='incre-text'>
                <h1>Be Incredible</h1>
                <p>Nec ultricies eget placerat ultricies eleifend dignissim aliquet sapien. Senectus vestibulum, eget erat at et congue cursus pretium.</p>
                <button>Explore Xinder</button>
            </div>
            <div className='incre-div'>
                {images.map((incre_img, index) => {
                    return (
                        <div key={index} className='incre-card'>
                            <div className='incre_card-img'>
                                <img src={incre_img.image} alt="" />
                            </div>
                            <div className='incre-info'>
                                <div className='incre-pro'>
                                    <img src={incre_img.profile_pic} alt="" />
                                </div>
                                <div className='Incre-info'>
                                    <p>by {incre_img.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Incredible