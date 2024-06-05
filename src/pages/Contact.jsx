import React from 'react'
import Hilda from '../assets/images/testimonial.jpeg'

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
      <div className='card'>
        <div className='card-shadow'>
        <h2>
        "Testimonial from"
                </h2>
              </div>
                    <div className="box">
                      <div className="img-box">
                        <img src={Hilda}/>
                      </div>
                      <div className="detail-box">
                        <h4>
                          Hilda Anyango
                        </h4>
                        <p>
                          This is one of the companies where employees' welfare is on  first place. I believe all of the employees really value that.” “I want to praise this company for coming up with the my studio design appartment that I have always looked forward to having .
                          As much as it is a great company and not  branding or anything they outdid themselves and they deserve a thumbs up.
                          Thank you so much for delivering!!!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="section">
                  <div className='container'>
                     <div className='card shadow'>
                      <div className='card-body'>
                        <div className='row'>
                          <div className='col-md-20'>
                            <h6>Get in touch</h6><br />
                            <div className='form-group'>
                              <label className='nb-1' htmlFor="">  Full Name</label>
                              <input type="text" className='form-control' placeholder='Enter full name'/>
                            </div>
                            <div className='form-group'>
                              <label className='nb-1' htmlFor="">  Phone number</label>
                              <input type="number" className='form-control' placeholder='Enter phone number'/>
                            </div>
                            <div className='form-group'>
                              <label className='nb-1' htmlFor=""> Email address </label>
                              <input type="email" className='form-control' placeholder='Enter email'/>
                            </div>
                            <div className='form-group'>
                              <label className='nb-1' htmlFor="">  Message</label>
                               <textarea rows='3'  className='form-control' placeholder='Type your message....'></textarea>
                            </div>
                            <div className='form-group'>
                               <button type='submit'   className='btn btn-primary shadow' > Send message</button>
                            </div>
                            
                            
                            

                      </div>
                      </div>
                      </div>  
                     </div>
                  </div>
                </section>
                </div>
    </div>

  )
}

export default Contact