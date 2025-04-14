import React from 'react'
import "../../public/stylesheets/Featured.css"

const Featured = () => {

    const cards = [
        { pic: "/images/pic1.png", category: "pottery", heading: "Vases Family" },
        { pic: "/images/pic2.png", category: "Oil Panting", heading: "Camel Portrait" },
        { pic: "/images/pic3.png", category: "Abstract Panting", heading: "Euforia" },
        { pic: "/images/pic4.png", category: "Object Design", heading: "Classic Watch" },
        { pic: "/images/pic5.png", category: "Sculpture", heading: "White Angel" },
    ]

    return (
        <div className='features'>
            <div className='text-headings'>
                <h1>Featured art categories</h1>
                <div className='view'>
                    <a href="">View All Categories</a>
                    <img src="src\assets\arrow-right.png" alt="" />
                </div>
            </div>
            <div className='cards'>
                {cards.map((card, index) => {
                    return <div key={index} className='card'>
                        <img src={card.pic} alt="" />
                        <div className='text'>
                            <h3>{card.category}</h3>
                            <h2>{card.heading}</h2>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Featured