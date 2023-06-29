import React from 'react'
import { Link } from 'react-router-dom'

function Story() {
  return (
    <div className='story'>
      <div>
        <h1>
          OUR STORY 
        </h1>

      </div>
      <div>
        <p>
      <div>
      In 2022, we established a dance studio with a vision to provide a creative and safe space for individuals of all ages and backgrounds to explore the art of dance. Our studio is equipped with state-of-the-art facilities and a team of skilled instructors who are passionate about sharing their expertise and love for dance.

We offer a wide range of dance classes, from classical ballet to contemporary, jazz, hip hop, and more. Our classes are designed to cater to dancers of all skill levels, from beginners to advanced, and are tailored to meet the individual needs of each student.
        </div> <br></br> 
      <div>
      We believe that dance is a form of self-expression and creativity, and we strive to foster a positive and supportive environment that encourages our students to explore and develop their unique talents.

Our future goals for the dance studio include
 expanding our outreach to the community, offering more specialized classes and workshops, and hosting events and performances to showcase the talents of our students. We are committed to providing a platform for our dancers to express themselves and showcase their artistry.
We believe that dance has the power to transform lives, and we are dedicated to sharing this passion with our students. Our mission is to inspire and empower individuals through the art of dance, and we look forward to continuing to grow and evolve as a studio to meet the ever-changing needs of our community.
      </div>
        </p>

      </div>
      <div>
      <Link to='/' 
    style={{textDecoration:"none " ,
        

      }}>
      <button style={{textDecoration:"none " ,
          backgroundColor:"white",
          marginTop:"100px" ,
          borderRadius:"5px"}}> to home </button>
    </Link>

      </div>
    </div>
  )
}

export default Story