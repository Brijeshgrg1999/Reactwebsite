import React from 'react'
import front from "../images/front.jpg"

function Header() {
  return (
    <div class="container">
     
    <div className='left'>
        <h1>OUR PHILOSOPHY

          </h1>
          <p style={{textAlign:"left"}}>
          At Team Divine Group, we believe that dance is not just a physical activity, but a form of self-expression and creativity. Our philosophy is based on the idea that everyone, regardless of age or background, should have the opportunity to explore and develop their passion for dance.

Our team is based in Hong Kong, and we are thrilled to bring our love for dance to the local community. Since starting our journey in early 2022, we have continued to grow and expand our offerings to include a wide range of dance styles and classes for all ages and skill levels.
          </p>
      
    </div>
    <div className='right'>
        <img src={front} width='500' height='400' style={{borderRadius:'4px'}} ></img>

    </div>
   
  

  </div>
  )
}

export default Header