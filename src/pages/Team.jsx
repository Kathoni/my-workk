
import Us from '../assets/images/team.jpeg'
import Group from '../assets/images/team (3).jpeg'
import Team1 from '../assets/images/team (2).jpeg'


function Team() {
  return (
    <div> <div className="card">
    <div className='card-body'>
    <div className="card-shadow">
       <div className='img-1'><img src={Group}/></div>
       <h1>At Authentic Interior Design;</h1>
       <p><i> We believe we can provide any solution desirable to anyone <br />
       in any geographical area. We have a supportive and friendly team that strive to <br />
       to achieve greatness.</i></p>
    </div>
    </div>
    </div>
    <h1>Our Team</h1>
    <h3>We operate under a centralized management.</h3>
    <p>We are united and accomplish work needed in due time <br />
    We are competent and esteemed workers and move under no supervision <br />
    we also look into our customer's comfortability.</p>
    <div className='img-2'><img src={Us}/> 
    <h1>In Togetherness we believe we can;</h1></div>
    <div className='card'>
    <div className='card-shadow'>
    <div className='card-body' justify-content="end">
    <div className='img-3'><img src={Team1}/> 
    <h1>What strengthens us on a daily basis.</h1></div>
    </div>
    </div>
    </div>

    

    </div>
  )
}

export default Team