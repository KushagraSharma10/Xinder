import React from 'react'
import "../stylesheets/Navbar.css"



const Navbar = () => {

  const links = ["explore", "solutions", "articles", "sign in"]

  return (
    <div className='nav'>
        <h1 className='heading'>xinder</h1>
        <div className='menu'><img src="/images/menu.png" alt="" /></div>
        {/* <div className='links'>
          <a href="">explore</a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div> */}
        <div className='links'> 
        {links.map((link , index) => {
          return <a key={index} href="">{link}</a>
        })}
        <button>join now</button>
        </div>
    </div>
  )
}

export default Navbar