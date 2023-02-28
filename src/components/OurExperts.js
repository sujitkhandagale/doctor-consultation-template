import React from "react";
import "./OurExperts.scss";
import "../app/Global.scss";
import Doctor1 from "../assets/doctor-team/doctor1.png";
import Doctor2 from "../assets/doctor-team/doctor2.png";
import Doctor3 from "../assets/doctor-team/doctor3.png";
import Doctor4 from "../assets/doctor-team/doctor4.png";
import Doctor5 from "../assets/doctor-team/doctor5.png";
import Doctor6 from "../assets/doctor-team/doctor6.png";
import Image from "next/image";

function OurExperts() {
  return (
    <div>
      <div className="container">
        <div className="section-heading text-center">
          <h2>Our Clinic Experts</h2>
        </div>
        <div className="experts-team text-center">
          <div className="team-member">
            <Image className="mobile-photo" src={Doctor1} alt="Mobile" />
            <h4>Manoj Kanojiya</h4>
            <p>Anesthesiologists</p>
          </div>
          <div className="team-member">
            <Image className="mobile-photo" src={Doctor2} alt="Mobile" />
            <h4>Manoj Kanojiya</h4>
            <p>Dermatologists</p>
          </div>
          <div className="team-member">
            <Image className="mobile-photo" src={Doctor3} alt="Mobile" />
            <h4>Manoj Kanojiya</h4>
            <p>Family Physicians</p>
          </div>
          <div className="team-member">
            <Image className="mobile-photo" src={Doctor4} alt="Mobile" />
            <h4>Manoj Kanojiya</h4>
            <p>Emergency Medicine Specialists</p>
          </div>
          <div className="team-member">
            <Image className="mobile-photo" src={Doctor5} alt="Mobile" />
            <h4>Manoj Kanojiya</h4>
            <p>Cardiologists</p>
          </div>
          <div className="team-member">
            <Image className="mobile-photo" src={Doctor6} alt="Mobile" />
            <h4>Manoj Kanojiya</h4>
            <p>Hematologists</p>
          </div>
        </div>
      <div className="container">
      <div className="exports-abouts">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis nulla a arcu volutpat, non vehicula mauris luctus. Proin eget tellus vestibulum urna tristique venenatis. Vestibulum orci magna, efficitur in rhoncus sed, faucibus id mauris. Nullam dictum et mi eget lacinia. Sed convallis, sem sit amet egestas posuere, mauris ligula posuere massa, quis convallis est neque nec metus. Donec tempor pulvinar dolor sit amet blandit. Integer rhoncus lacus nibh, non pretium lorem sollicitudin sit amet. Duis quis rhoncus libero.</p>
          <p>
          Aenean sed neque elementum, egestas enim sed, commodo leo. Sed convallis velit pulvinar ex elementum, eu ultricies sapien dapibus. Aliquam sit amet diam nec enim convallis luctus. Mauris blandit hendrerit quam et pretium. Nam a pretium massa, et rutrum magna. Donec sem metus, feugiat ut felis eu, cursus ullamcorper ipsum. Nulla efficitur tempus nulla ac eleifend. Etiam ac dui ac nisl viverra vulputate. Mauris nec elit a lorem porttitor pretium feugiat ut nisi.
          </p>
          <p>
          Praesent porttitor nunc diam, volutpat suscipit est ornare vitae. Fusce hendrerit odio quam, quis interdum sapien efficitur vel. Phasellus nec est sed nibh vulputate laoreet ac lacinia lorem. Curabitur at eros neque. Aenean non imperdiet sem. Curabitur gravida enim eu mauris feugiat congue. Suspendisse mauris sem, mattis vitae augue sit amet, ultrices maximus arcu. Fusce semper arcu nunc, quis pretium eros egestas sed. Aenean vulputate lacus sit amet lacus porttitor auctor. Aliquam erat volutpat. Praesent nec nibh lobortis, pellentesque sem eu, commodo arcu.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default OurExperts;
