import React from 'react'
import "../stylesheets/Companies.css"


const Companies = () => {

    const company_paths = ["src/assets/smart-finder.png", "src/assets/Zoomerr.png", "src/assets/Shells.png", "src/assets/Waves.png", "src/assets/artVenue.png"]

    return (
        <div className='companies'>
            {company_paths.map((url, index) => {
                return <div key={index} className='icons'>
                    <img src={url} alt="" />
                </div>
            })}
        </div>
    )
}

export default Companies