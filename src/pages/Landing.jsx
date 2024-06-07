import React from 'react'
import '../styles/style.css'
import Slider from '../components/Slide'
import Image  from '../assets/images/bedroomsetting.jpeg'
import myimage from '../assets/images/design.jpeg'
import  myimage1  from '../assets/images/kitchen setup.jpeg'
import  mydesign from '../assets/images/design2.jpeg'
import mydesign2 from '../assets/images/design3.jpeg'
import { publicLinks } from '../constants/Links'
import { Link } from 'react-router-dom'
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
        <div className='container'>
          <div class="row">
            <div class="col">
            <div class="card" >
                 <img src={Image} style={{width:"8rem"}} alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">Bedroom Design</h5>
                    <p class="card-text">We do offer a specific amount of satisfaction to our clients.</p>
                        <Link  to={publicLinks.Contact} class="btn btn-primary">BOOK WITH US</Link>
          </div>
        </div>
            </div>
            <div class="col">
            <div class="card" >
                 <img src={myimage} style={{width:"8rem"}} alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">Sitting Room area</h5>
                    <p class="card-text">We take keen concideration of what your heart desires and we deliver the best way we can.</p>
                        <Link  to={publicLinks.Contact}  class="btn btn-primary">BOOK WITH US</Link>
          </div>
        </div>
            </div>
            <div class="col">
            <div class="card" >
                 <img src={myimage1} style={{width:"8rem"}} alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">Small Kitchen set</h5>
                    <p class="card-text">Quality and conciderate amount of time is taken by our team members to come up with a beatiful design.</p>
                        <Link  to={publicLinks.Contact}  class="btn btn-primary">BOOK WITH US</Link>
          </div>
        </div>
            </div>
            <div class="col">
            <div class="card" >
                 <img src={mydesign} style={{width:"8rem"}} alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">living room design</h5>
                    <p class="card-text">Some quality and very much affordable designs to suit your taste are available.</p>
                        <Link  to={publicLinks.Contact}  class="btn btn-primary">BOOK WITH US</Link>
          </div>
        </div>   
            </div>
            <div class="col">
            <div class="card" >
                 <img src={mydesign2} style={{width:"8rem"}} alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">Dining set</h5>
                    <p class="card-text">We also offer your taste according to your color preference.</p>
                        <Link  to={publicLinks.Contact}  class="btn btn-primary">BOOK WITH US</Link>
          </div>
        </div>   
            </div>
          </div>
         
            </div>
         
    </div>
  

  )
}

export default Landing