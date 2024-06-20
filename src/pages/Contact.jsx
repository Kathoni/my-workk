import React from 'react'
import Hilda from '../assets/images/testimonial.jpeg'
import Daisy from '../assets/images/testimonial2.jpeg'
import Damaris from '../assets/images/testionial3.jpeg'

function Contact() {
  return (
    <div>
      
      <div className='contact'>
    <h1>Start your designing with  us</h1>
      <img src={Contact} alt="" />
    <h6>We are available on any social media platforms. We will be happy to help.</h6>
        </div>
        <h2>READY WHEN YOU ARE READY!!</h2>
        <div className='clientcontainer'>
        <h2>Our clients testimonies matter to us; </h2>
        <div className='container'>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="boxfront">
                        <img src={Hilda} className='object-fit-lg-contain border rounded' alt="image" />
                         <h2>Hilda</h2>
                          <p>Im happy to have worked with such a competent group. They have such wonderfull
                            collaboration nature and a lot of experience. I would highly recommend them for any project youd like.
                            KUDOSS !!!
                          </p>
                      </div>

                </div>
     
     </div>
            <div className="col-lg-4">   
                    <div className="card">
                      <div className="boxfront">
                        <img src={Damaris} className='object-fit-lg-contain border rounded' alt="image" />
                         <h2>Damaris</h2>
                          <span className='fa fa-quote-left'></span>
                          <p>
                            I have been working with them for 3 years. They are very professional. I would highly recommend them. 
                            They have good communication skills and they are very helpful.They get your project done on time.
                          </p>
                         </div>
                      </div>
                    
      
    </div>
            <div className="col-lg-4">
                    <div className="card">
                      <div className="boxfront">
                        <img src={Daisy} className='object-fit-lg-contain border rounded' alt="image" />
                         <h2>Daisy</h2>
                          <span className='fa fa-quote-left'></span>
                          <p>
                            Im lucky to have worked with such a self-driven company. They did their work right on time and gave out quality result.
                            I would highly recommend them to guys out there with unique ideas for their homes.
                          </p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>

                <section className="section">
                   <div className='container'>
                     <div className='card'>
                       <form class="row g-3" style={{backgroundColor:"beige"}}>
                         <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Email</label>
                              <input type="email" class="form-control" id="inputEmail4"/>
                      </div>
                          <div class="col-md-4">
                             <label for="inputPassword4" class="form-label">Password</label>
                               <input type="password" class="form-control" id="inputPassword4"/>
                       </div>
                          <div class="col-12">
                             <label for="inputAddress" class="form-label">PHONE NUMBER</label>
                              <input type="number" class="form-control" id="inputPhone" placeholder="07***34556"/>
                      </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address </label>
                          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                       </div>
                    <div class="col-md-4">
                         <label for="inputCity" class="form-label">City</label>
                           <input type="text" class="form-control" id="inputCity"/>
                        </div>
                     <div class="col-md-4">
                         <label for="inputState" class="form-label">State</label>
                             <select id="inputState" class="form-select">
                               <option selected>Choose...</option>
                                  <option><ul><li>KENYA</li>
                      </ul>     
                </option>
            </select>
  </div>
          <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        TRY US 
      </label>
    </div>
  </div>
         <div class="col-12">
                   <button type="submit" class="btn btn-primary">REGISTER NOW</button>
                         </div>
                      </form>
                    </div>
                   </div>
                 </section>
               </div>
             </div>
         </div>
                
    </div>

  )
}

export default Contact