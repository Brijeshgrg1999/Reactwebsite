import React from 'react'
import one from '../images/1.jpg' ; 
import two from '../images/2.jpg' ; 
import three from '../images/3.jpg' ; 
import four from '../images/4.jpg' ; 
import five from '../images/5.jpg' ; 
import six from '../images/6.jpg' ; 
import Slide from 'react-reveal/Slide'

function Recent() {
  return (
    <div>
         <section className='grid'>
      <h1> Recent Projects </h1>
      <p>(click to visit the videos) </p>
        <div className='grid-item'>
          <Slide left>
          <div className='first-block'>
          <a href='https://www.youtube.com/watch?v=j9ODDmJRUBo&pp=ygUUdGVhbSBkaXZpbmUgb2ZmaWNpYWw%3D' target="_blank" ><img src={one} width={260}  height={160}/></a>
          <a href='https://www.youtube.com/watch?v=7GcaYuW2oMw&pp=ygUUdGVhbSBkaXZpbmUgb2ZmaWNpYWw%3D'target="_blank" ><img src={two} width={260}  height={160}/></a>
         <a href='https://www.youtube.com/watch?v=_LzqZPISTww&pp=ygUUdGVhbSBkaXZpbmUgb2ZmaWNpYWw%3D'target="_blank" > <img src={three} width={260}  height={160}/></a>
        
          </div>
          </Slide>
          <Slide right>
          <div className='second-block'>
            <a href='https://www.youtube.com/watch?v=UYJTtb7ndnc'target="_blank" > <img src={four} width={260}  height={160}/></a>
          <a href='https://www.youtube.com/watch?v=odTMPls--aE&pp=ygUUdGVhbSBkaXZpbmUgb2ZmaWNpYWw%3D'target="_blank" > <img src={five} width={260}  height={160}/> </a>
           <a href='https://www.youtube.com/watch?v=g3YLj0ksZ4w&pp=ygUUdGVhbSBkaXZpbmUgb2ZmaWNpYWw%3D'target="_blank" > <img src={six} width={260}  height={160}/></a>
           
        
          </div>
          </Slide>
        
        </div>
      </section>
    </div>
  )
}

export default Recent