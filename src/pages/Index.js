import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import '../App.css';
import '../font.css' ; 
import Faq from '../components/Faq';
import Collab from '../components/Collab';

import Footer from '../components/Footer';
import Location from '../components/Location' ; 
import Header from '../components/Header';
import Recent from '../components/Recent';
import Instructor from '../components/Instructor';
import Pricing from '../components/Pricing';
import HiddenImage from '../components/HiddenImage';

function index() {
  return (
    <div className="App">

    <Fade bottom>
        <HiddenImage />
    </Fade>

    <Fade bottom>
    <section>
        <Header />
    </section>
    </Fade>

    {/* recent projects */}
    <Fade bottom>
        <Recent />

    </Fade>

    {/* instructor */}
    <Fade bottom>
        <Instructor />
    </Fade>

    {/* pricing */}
    <Slide left>
        <Pricing />
    </Slide>

    {/* FAQ */}
    <Slide right>
    <section>
      <div className='faq'>
        <h1> FAQ </h1>
        <Faq />
      </div>
    </section>
    </Slide>

    {/* collaboration form */}
    <Slide left>
    <section>
      <h1 style={{marginBottom:'100px'}}>COLLAB ? </h1>
        <Collab/>
    </section>
    </Slide>

    {/* location */}
    <section>
        <Location />
    </section>

    <section>
      <Footer /> 
    </section>

   
  </div>
  )
}

export default index