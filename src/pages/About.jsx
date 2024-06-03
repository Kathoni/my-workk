
import Class from '../assets/images/about.jpeg'
import Myimage from '../assets/images/banner.jpeg'
function About() {
  return (
    <div>
    <div className='about'>
    <div className='about'><img src={Class} /></div>
    <h1>About us</h1> 
    <h2>We are a world operating company ;</h2>
    <p>We offer services based on any geographical <br />
    area you may be in.</p>
    <h1>You request and we deliver.</h1>
    <p>On our long journey we have been able to meet several 
      different people with different tastes<br/>but all in all
      we have been able to satisfy them with our unique and <br/>
      designs.
    </p>
    <div>
    <img src={Myimage}/>
    </div>
   
    
    </div>
    </div>
  )
}

export default About