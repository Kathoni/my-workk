import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import { publicLinks } from '../constants/Links'
export default function Navbar() {
  return (
    
    <div className='navbar'>

            <img src={Logo}/>
             <div className='mylinks'>
             <Link to={publicLinks?.Landing}> Our page </Link>
             <Link to={publicLinks?.About}> About </Link>
             <Link to={publicLinks?.Team}> Team </Link>
             <Link to={publicLinks?.Contact}> Contact </Link>
             </div>


            
    </div>
  )
}
