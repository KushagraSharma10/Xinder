import React, { useState } from 'react'
import "../stylesheets/Navbar.css"



const Navbar = () => {
  const links = ["explore", "solutions", "articles", "sign in"]

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='nav'>
      <h1 className='heading'>xinder</h1>
      <div onClick={() => toggleMenu()} className='menu'><img src="/images/menu.png" alt="" /></div>
      <div className='links' style={{ display: showMenu ? "flex" : "none" }} >
        {links.map((link, index) => {
          return <a key={index} href="">{link}</a>
        })}
        <button onClick={() => toggleMenu()} className='x'>X</button>
        <button className='join' >join now</button>
      </div>
    </div>
  )
}

export default Navbar