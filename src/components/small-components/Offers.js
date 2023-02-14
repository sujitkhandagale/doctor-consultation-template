<<<<<<< HEAD
"use client"
import React from "react";
import "./Offers.scss";
=======
import React from 'react';
import './Offers.scss';
>>>>>>> b5cf500b56fdef7384363ca136ea5527cb45fe1b
import Image from 'next/image';
import ambulance from '../../assets/ambulance.png';
import Arrow from '../../assets/arrow.png';
import autoimmuneDdisease from '../../assets/autoimmune-disease.png';
import immunity from '../../assets/immunity.png';
import medicalStaff from '../../assets/medical-team.png';

function Offers({ children }) {
<<<<<<< HEAD

  return (
  <div className="container">
    <div className="section-heading text-center">
    <h2>What We Offer </h2>
    </div>
      <div className="offers">
      <div className="offers-tab">
        <Image src={ambulance} width={100} alt="" />
<h4>Immediate Assistance</h4>
      </div>
      <div className="offers-tab">
      <Image src={Arrow} width={100} alt="" />
<h4>Less Expensive</h4>
      </div>
      <div className="offers-tab">
      <Image src={medicalStaff} width={100} alt="" />
<h4>Experienced Staff</h4>
      </div>
      <div className="offers-tab">
      <Image src={immunity} width={100} alt="" />
<h4>Ideal For Preventive Care</h4>
      </div>
      <div className="offers-tab">
      <Image src={autoimmuneDdisease} width={100} alt="" />
<h4>Effective Disease Management</h4>
      </div>
    </div>
    </div>
  );
=======
	return (
		<div className="container">
			<div className="section-heading text-center">
				<h2>What We Offer </h2>
			</div>
			<div className="offers">
				<div className="offers-tab">
					<Image src={ambulance} width={100} alt="" />
					<h4>Immediate Assistance</h4>
				</div>
				<div className="offers-tab">
					<Image src={Arrow} width={100} alt="" />
					<h4>Less Expensive</h4>
				</div>
				<div className="offers-tab">
					<Image src={medicalStaff} width={100} alt="" />
					<h4>Experienced Staff</h4>
				</div>
				<div className="offers-tab">
					<Image src={immunity} width={100} alt="" />
					<h4>Ideal For Preventive Care</h4>
				</div>
				<div className="offers-tab">
					<Image src={autoimmuneDdisease} width={100} alt="" />
					<h4>Effective Disease Management</h4>
				</div>
			</div>
		</div>
	);
>>>>>>> b5cf500b56fdef7384363ca136ea5527cb45fe1b
}

export default Offers;
