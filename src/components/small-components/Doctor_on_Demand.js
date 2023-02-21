import React from "react";
import "./doctor-on-demand.scss";
import GooglePlayStore from "../../assets/google-store.png";
import AppleyStore from "../../assets/apple-store.png";
import Mobile from "../../assets/mobile.png";
import Image from "next/image";

function Doctor_on_Demand() {
  return (
    <div className="doctor-on-demand">
      <div className="sides_1">
        <h4>Doctor On Demand</h4>
        <p>Find our exclusive app only on</p>
        <p>24/7 Service available</p>
        <p>Easy to install and use</p>
        <p>World's first doctor's app</p>
        <p>find any type medical related consulation</p>
        <p>Many more things to explore</p>
      </div>
      <div className="sides_1 text-center">
        <Image className="mobile-photo" src={Mobile} alt="Mobile" /> <br />
        <Image src={GooglePlayStore} width={200} alt={"play store button"} />
        <Image src={AppleyStore} width={200} alt={"Apple Store Button"} />
      </div>
    </div>
  );
}

export default Doctor_on_Demand;
