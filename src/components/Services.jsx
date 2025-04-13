import React from 'react'
import "../stylesheets/Services.css" 
const Services = () => {

    const Services = [
        {name: "Nibh viverra", icon: "src/assets/service_icon1.png"},
        {name: "Cursus amet", icon: "src/assets/service_icon2.png"},
        {name: "Ipsum fermentum", icon: "src/assets/service_icon3.png"},
        {name: "Quisque euismod", icon: "src/assets/service_icon4.png"},
        {name: "Arcu vulputate", icon: "src/assets/service_icon5.png"},
        {name: "Cras auctor", icon: "src/assets/service_icon6.png"},
    ]

  return (
    <div className='services'>
        <h1>Expanding services</h1>
        <div className='Service-icons'>
            {Services.map((service) => {
                return <div className='service-area'>
                    <div className='ser_icon'>
                        <img src={service.icon} alt="" />
                    </div>
                    <h3>{service.name}</h3>
                </div>
            })}
        </div>
        <div className='btn'> <button>Find Services</button></div>
    </div>
  )
}

export default Services