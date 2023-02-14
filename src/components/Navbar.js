<<<<<<< HEAD
import React from 'react'
import "./Navbar.scss"
import MobileMenu from './small-components/MobileMenu';



import Link from "next/link";
import mobileMenu from './small-components/MobileMenu';
function Navbar({childern}) {
  return (
    <div>
<nav className='navbar'>
 <div className="navbar-collection">
  <MobileMenu></MobileMenu>
    <div className="navbar-links">
       <ul className='navlinks-options'>
        <li><Link className='nav-link' href="/">Home</Link></li>
        <li><Link className='nav-link'  href="/benefits">Benefits</Link></li>
        <li><Link className='nav-link'  href="/about">About Me</Link></li>
        <li><a className='nav-link'  href="">Contact</a></li>
        <li><button className='button-style-1' >
          <a href="tel:+Emergency Call" className='p-0 m-0 text-decoration-none'>Emergency Call</a></button></li>
       </ul>
    </div>
 </div>
</nav>

    </div>
  )
=======
import React from 'react';
import './Navbar.scss';

import Link from 'next/link';
function Navbar({ childern }) {
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-collection">
					<div className="navbar-links">
						<ul className="navlinks-options">
							<li>
								<Link className="nav-link" href="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="nav-link" href="/benefits">
									Benefits
								</Link>
							</li>
							<li>
								<Link className="nav-link" href="/about">
									About Me
								</Link>
							</li>
							<li>
								<a className="nav-link" href="">
									Contact
								</a>
							</li>
							<li>
								<button className="button-style-1">
									<a
										href="tel:+Emergency Call"
										className="p-0 m-0 text-decoration-none"
									>
										Emergency Call
									</a>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
>>>>>>> b5cf500b56fdef7384363ca136ea5527cb45fe1b
}

export default Navbar;
