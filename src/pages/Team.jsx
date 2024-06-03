
import Us from '../assets/images/team.jpeg'
import Group from '../assets/images/team (3).jpeg'
import Team1 from '../assets/images/team (2).jpeg'


function Team() {
  return (
    <div>
       <div className='img-1'><img src={Group}/></div>
    <h1>Our Team</h1>
    <h3>We operate under a centralized management.</h3>
    <p>We are united and accomplish work needed in due time <br />
    We are competent and esteemed workers and move under no supervision <br />
    we also look into our customer's comfortability.</p>
    <div className='img-2'><img src={Us}/> 
    <h1>In Togetherness we believe we can;</h1></div>
    <div className='img-3'><img src={Team1}/> 
    <h1>What strengthens us;</h1></div>

    

    </div>
  )
}

export default Team