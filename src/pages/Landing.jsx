import React from 'react'
import '../styles/style.css'
import Slider from '../components/Slide'
import Image  from '../assets/images/bedroomsetting.jpeg'
import myimage from '../assets/images/design.jpeg'
import  myimage1  from '../assets/images/kitchen setup.jpeg'
import  mydesign from '../assets/images/design2.jpeg'
import mydesign2 from '../assets/images/design3.jpeg'
function Landing() {
  return (
    <div >
    <div className='home'>
    <h1><i>AUTHENTIC INTERIOR DESIGN</i></h1> 
        <Slider/>

      <h2>Welcome to our official website. </h2>
        <p>We are glad that you chose us to design and <br />
        re-establish your house design to your  liking.</p> 
        <h1>Here are some of the amazing samples we offer;</h1>
       </div>
         <div className='row'>
           <div className='designs'>
              <div className='clm'>
                 <img src={Image}/>
                      </div>
        <div className='clm'>
                  <img src={myimage}/>
                      </div>
        <div className='clm'>
     <img src={myimage1}/>
   </div>
   
   </div>
   </div>
    <div className='row'>
    <div className='designs'>
     <div className='clm'>
   <img src={mydesign}/>
   </div>
   <div className='clm'>
    <div className='designs'>
      <div className='row'>
        <img src={mydesign2} />
        </div>
    </div>
  
   </div>
   </div>
   </div>

   </div>

  )
}

export default Landing