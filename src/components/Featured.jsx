import React from 'react'
import "../stylesheets/Featured.css"

const Featured = () => {

    const cards = [
        { pic: "src/assets/pic1.png", category: "pottery", heading: "Vases Family" },
        { pic: "src/assets/pic2.png", category: "Oil Panting", heading: "Camel Portrait" },
        { pic: "src/assets/pic3.png", category: "Abstract Panting", heading: "Euforia" },
        { pic: "src/assets/pic4.png", category: "Object Design", heading: "Classic Watch" },
        { pic: "src/assets/pic5.png", category: "Sculpture", heading: "White Angel" },
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