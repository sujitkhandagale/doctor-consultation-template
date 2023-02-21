import React from 'react'
import Github from '../assets/github.png';
import Image from 'next/image';
// import '../app/mobile-responsive.scss'
function Social_media() {
  return (
    <div className='Social_media'>
       {/* <div className="social-media-list"></div> */}
       <a target={'_blank'} href="https://github.com/sujitkhandagale/doctor-consultation-template"><div className="social-media-list"> <Image src={Github}/><span> Find Me</span></div></a>

     </div>
  )
}

export default Social_media