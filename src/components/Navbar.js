"use client"
import React, {useState} from 'react';
import './Navbar.scss';
// import '../app/mobile-responsive.scss'
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
function Navbar({ childern }) {
    const [isMobilemenu, setMobilemenushow] = useState("false");

    const ToggleClass = () => {
        setMobilemenushow(!isMobilemenu);
         };
	return (
		<div>
			<nav className="navbar">

<div className="MobileMenuOpenButton">
	<button onClick={ToggleClass}><GiHamburgerMenu
 size={30} /></button>
</div>
<div className={isMobilemenu ? "setMobilemenuhide navbar-collection desktop-view" : "setMobilemenushow navbar-collection mobile-menu desktop-view"}>

					<div className="navbar-links">

						<ul className="navlinks-options">

							<li>
								<Link className="nav-link active" href="/">
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

							<Link className="nav-link" href='/contact'>
									Contact
								</Link>
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
}
export default Navbar;
