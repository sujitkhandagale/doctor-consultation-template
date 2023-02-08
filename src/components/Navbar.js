import React from 'react'
import "./Navbar.scss"
import Logo from '../../public/favicon.ico'
function Navbar({childern}) {
  return (
    <div>
<nav className='navbar'>
 <div className="navbar-collection">
    <div className="navbar logo">
    </div>
    <div className="navbar-links">
       <ul className=''>
        <li><a href="">Home</a></li>
        <li><a href="">Benefits</a></li>
        <li><a href="">About Me</a></li>
        <li><a href="">Contact</a></li>
        <li><button className='button-style-1' href="http://"><i class="fa-solid fa-phone"></i> Emergency Call</button></li>
       </ul>
    </div>
 </div>
</nav>
    </div>

  )
}

export default Navbar