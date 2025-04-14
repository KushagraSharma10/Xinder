import React from 'react'
import "../stylesheets/Companies.css"


const Companies = () => {

    const company_paths = ["/images/smart-finder.png", "/images/Zoomerr.png","/images/Shells.png", "/images/Waves.png", "images/artVenue.png"]

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