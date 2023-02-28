import React from "react";
import Navbar from "./../components/Navbar";
import "../components/Contact.scss";

function contact() {
  return (
    <div>
      <Navbar />
      <div className="page-section-heading">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-form">

        <div className="form-section">
		<h2>Get In Touch</h2>
          <form action="">
            <label className="form-lable">Name</label>
			<br />
            <input type="text" className="form-control" />
			<br />
			<label className="form-lable">Mobile Number</label>
			<br />
            <input type="text" className="form-control" />
			<br />
			<label className="form-lable">Message</label>
			<br />
            <textarea type="text" className="form-control" />
			<br />
			<button className="-btn" type="submit">Submit</button>
          </form>
        </div>
        <div className="conact-us-info">
			<h4>address : Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
			<h4>Contact No :</h4>
			<h4>Email Id : </h4>
			<h4>Emeergency No :</h4>
		</div>
      </div>
    </div>
  );
}

export default contact;
