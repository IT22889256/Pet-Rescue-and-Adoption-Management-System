import React from 'react'
import homeImg from '../../image/homeImg.jpg'
export default function Gallery() {
  return (
    <div>
        <div class="columns-2xs">
            <img className="w-full aspect-square" src={homeImg} />   
            <img className="w-full aspect-square" src={homeImg} />   
    </div>
    </div>
  )
}
