import React from 'react'
import "../stylesheets/Footer.css"

const Footer = () => {

    const Footer_Links = [
        "src/assets/youtube.png",
        "src/assets/facebook.png",
        "src/assets/twitter.png",
        "src/assets/instagram.png",
        "src/assets/linkedin.png",
    ]

  return (
    <div className='footer'>
        <hr />
        <div className='footer-text'>
            <p>@ 2023 Xinder, Inc. All rights reserved.</p>
            <div className='footer-links'>
                {Footer_Links.map((foot_link, index) => {
                    return (
                        <div key={index} className='footer_link'>
                            <img src={foot_link} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
        <p className='footer-desc'>In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque turpis id penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. Quis morbi condimentum phasellus in ultricies eu amet.</p>

    </div>
  )
}

export default Footer