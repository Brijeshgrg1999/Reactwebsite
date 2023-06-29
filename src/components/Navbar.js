import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <div className='navbar'>
          <div style={{marginLeft:"50px"}}>
            DIVINE
          </div>
          <div style={{marginRight:"0px"}}>
          <Link to='enrollment' style={{textDecoration:'none', color:'white'}}>JOIN US</Link>
          </div>
          <div style={{marginRight:'20px' , textDecoration:"none",color:'white'}}>
            <Link to='about' style={{textDecoration:'none', color:'white'}}>
           OUR STORY
            </Link>
          </div>
      </div>
  )
}

export default Navbar ; 