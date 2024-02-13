import React from 'react'
import './photo.css'

function Photo({src}) {
  return (
    <div className="photo">
        <img src={src} alt="Uploaded"/>
    </div>
  )
}

export default Photo