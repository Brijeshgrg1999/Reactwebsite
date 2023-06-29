import React from 'react'
import { Instagram } from '../images/Instagram'
import { Youtube } from '../images/Youtube'

function Footer() {
  return (
    <div className='footer'>
      <h5>TEAM DIVINE 2022</h5>
      <div>
        <p>find us here : </p>
        <a href='https://www.instagram.com/_teamdivineofficial/'>  
            <Instagram/>
         </a>
        <a href='https://youtube.com/@teamdivineofficial7970'> 
              <Youtube/>
        </a>
      </div>

    </div>
  )
}

export default Footer