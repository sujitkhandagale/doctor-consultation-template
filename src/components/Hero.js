import React from 'react';
import './Hero.scss';
import Button from './small-components/Button';
import Team from '../assets/team.png';
import Image from 'next/image';


function Hero() {
	return (
		<div className="container-none">
			<div className="hero-home">
				<div className="hero-1 p-2 flex-centered">
					<h2>Just One Step Away To Book <br /> <span>Appointment</span></h2>
					<p>Feeling not well, having stress on daily bases</p>
					<button className="--btn-style-2">Book Appointment</button>
				</div>
				<div className="hero-1 auto-p-2">
					<Image src={Team} width={600} alt={"doctor Team"} />

				</div>
			</div>
		</div>
	);
}

export default Hero;
