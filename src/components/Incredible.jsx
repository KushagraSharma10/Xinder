import React from 'react'
import "../../public/stylesheets/Incredible.css"
const Incredible = () => {   

const images = [
    { title: "Splash", image: "src/assets/latest3.png", profile_pic:"src/assets/pf3.png" },
    { title: "Colorful Face", image: "src/assets/latest4.png" ,profile_pic:"src/assets/pf4.png" },
    { title: "Fill", image: "src/assets/Spying.png" ,profile_pic:"src/assets/pf5.png" },
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