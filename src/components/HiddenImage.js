import React from 'react'
import image from '../images/image.jpg' 

function HiddenImage() {
  return (
    <div ><img src={image}  
    style={{position:"absolute" ,
    left:"20px",
    borderRadius:"70px",
    opacity:"0.2",
    }} width={600}/>
    </div>
  )
}

export default HiddenImage