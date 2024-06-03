import React from 'react'
import '../styles/style.css'
import Instaicon from '@mui/icons-material/Instagram';
import Facebookicon from '@mui/icons-material/Facebook';
import Twittericon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
        <div className='socials'>
         <Instaicon/><Facebookicon/><Twittericon/>
            <p>Copyright © 2022.</p>

        </div>
    
</div>
  )
}

export default Footer