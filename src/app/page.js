import Offers from '@/components/small-components/Offers';
import { React } from 'react';
import Navbar from '../components/Navbar';
import Hero from './../components/Hero';
import './Global.scss';
import './mobile_responsive.scss';
import AmbulanceDemo from './../components/small-components/AmbulanceDemo';
import Home_page_about from './../components/small-components/Home_page_about';
import Doctor_on_Demand from '@/components/small-components/Doctor_on_Demand';
import Social_media from './../components/Social_media';


function Home() {
	return (
		<main>
			<Navbar></Navbar>
			{/* <div className='header-notfication'>
      <div className="header-text-no">
      Emergency Service Avilable 24/7 on toll free number : 123456789
      </div>
    </div> */}
			<Hero></Hero>
			<Offers></Offers>
			<AmbulanceDemo />
			<Doctor_on_Demand/>
			<Home_page_about/>
			<Social_media/>
			<div></div>
		</main>
	);
}

export default Home;
