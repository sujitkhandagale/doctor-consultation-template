import React from 'react';
import './Offers.scss';
import Image from 'next/image';
import ambulance from '../../assets/ambulance.png';
import Arrow from '../../assets/arrow.png';
import autoimmuneDdisease from '../../assets/autoimmune-disease.png';
import immunity from '../../assets/immunity.png';
import medicalStaff from '../../assets/medical-team.png';

function Offers({ children }) {
	return (
		<div className="container">
			<div className="section-heading text-center">
				<h2>What We Offer </h2>
			</div>
			<div className="offers">
				<div className="offers-tab">
					<Image src={ambulance} alt="" />
					<p>Immediate Assistance</p>
				</div>
				<div className="offers-tab">
					<Image src={Arrow}  alt="" />
					<p>Less Expensive</p>
				</div>
				<div className="offers-tab">
					<Image src={medicalStaff}  alt="" />
					<p>Experienced Staff</p>
				</div>
				<div className="offers-tab">
					<Image src={immunity}  alt="" />
					<p>Ideal For Preventive Care</p>
				</div>
				<div className="offers-tab">
					<Image src={autoimmuneDdisease}  alt="" />
					<p>Effective Disease Management</p>
				</div>
			</div>
		</div>
	);
}

export default Offers;
