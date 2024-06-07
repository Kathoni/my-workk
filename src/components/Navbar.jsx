import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import { publicLinks } from '../constants/Links'
export default function Navbar() {
  return (
    
    <div className='navbar'>

<nav class="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor: "#6b8e23",  width: "100%"} }>
  <div class="container-fluid">
    <img src={Logo} alt="" />
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
               </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                       <li class="nav-item">
                <Link to={publicLinks.Landing} class="nav-link active" aria-current="page" >Home</Link>
                   </li>
                      <li class="nav-item">
                       <Link  to={publicLinks.About} class="nav-link active" >About</Link>
                    </li>
                 <li class="nav-item">
               <Link  to={publicLinks.Contact} class="nav-link active"  >Contact Us</Link>
             </li>
        <li class="nav-item">
          <Link  to={publicLinks.Team} class="nav-link active" >Our Team</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>


            
    </div>
  )
}
