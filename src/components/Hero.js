import React from 'react';
import './Hero.scss';
import Button from './small-components/Button';


function Hero() {
	return (
		<div className="container-none">
			<div className="hero-home">
				<div className="hero-1 flex-centered">
					<h2>Just One Step Away To Book Appointment</h2>
					<p>Feeling not well, having stress on daily bases</p>
					<button className="--btn-style-2">Book Appointment</button>
				</div>
				<div className="hero-1 auto-p-2">
					<img
						className="image-div"
						src="https://i.ibb.co/Jc0Bp31/demo.png"
						width={300}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
