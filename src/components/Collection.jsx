import React from 'react'
import "../../public/stylesheets/Collection.css"

const Collection = () => {
  return (
    <div className='collection'>
        <div className='col-text'>
            <p>Add more masterpieces to your growing collection</p>
            <button>Join Now </button>
        </div>
        <div className='col-img'>
            <img src="src\assets\admin.png" alt="" />
        </div>
    </div>
  )
}

export default Collection