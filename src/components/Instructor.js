import React from 'react';
import Sofia from "../images/sofia.jpg" ; 
import Rista from "../images/rista.jpg" ; 
import Fade from 'react-reveal/Fade'

function Instructor() {
  return (
    <section> 
    <h1>Meet Our Dancer Teachers</h1>
   <div className='instructor'>
 
 
         
         <Fade left>
           <div className='rista'>
             <h3>Gurung Rista </h3>
             <p>Rista Gurung is a skilled dancer and teacher with over 5 years of experience. Her passion and dedication for dance are evident in her teaching, Her teaching style is fun and engaging, with a focus on helping her students build confidence and express themselves through movement. She believes that dance is a powerful form of self-expression and encourages her students to explore their creativity and individuality.
             </p>
             <img src={Rista} alt='rista' height={200}  width={170}
            />
            
           

           </div>
     </Fade>
     <Fade right>
       <div className='sofiya'>
       <img src={Sofia} alt="sofia" height={150} width={190}/>
   
            
             <p>
        Sofiya Gurung is a talented dance instructor who has been dancing for over 5 years. She has a teaching style that is nurturing and encouraging, and she focuses on helping her students build a strong technical foundation while also exploring their own unique style. She believes that dance is a powerful form of self-expression and is passionate about helping her students develop their skills and confidence.     
             </p>
           
             <h3>Gurung Sofiya</h3>
       </div>
       </Fade>
       </div>


 
 </section>
  )
}

export default  Instructor ; 