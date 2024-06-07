
import Us from '../assets/images/team.jpeg'
import Group from '../assets/images/team (3).jpeg'


function Team() {
  return (
    <div> 

      <div className="container-fluid mb-3 d-flex flex-column align-items-center justify-content-center text-center mx-auto"
       style={{ height: "50vh", backgroundColor: "beige" }}>
        <div className="text-center">
          <h3 className=" fs-1">Meet Our Team</h3>
        </div>
      </div>
      <section className="container py-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <h4 className="text-decoration-underline">Meet Our Team</h4>
            <p className="fst-italic">
              We are a world operating company. You request and we deliver.
              Our company has been operating since 2010.{" "}
              <br /> We have always encouraged team work and flexibility.
              This makes us to learn new things and accomplish our goals and also get to learn alot
              from one another.
            </p>
            <div className="iconsContainer">
              <div className='icons'>
                <div className='icon'><i class="bi bi-telephone-fill"></i>
                <div className="row">
                <div className="col-md-6 col-sm-12 mb-3">
                <h6> +254 111 725 146</h6>
                </div>
                <div className='icon'><i class="bi bi-whatsapp"><h6>+254 111 725 146</h6></i></div>
                <div className='icon'><i class="bi bi-geo-alt-fill"><h6>Nairobi, Donholm opposite Paswela court</h6></i></div>
                <div className="col-md-6 col-sm-12 mb-3">
                <img src={Us} alt="" className="img-fluid" />
              </div>
             </div>
          </div>
          </div>
        </div>
           
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <img src={Group} alt="" className="img-fluid" />
            
          </div>
        </div>
      </section>


    

    </div>
  )
}

export default Team