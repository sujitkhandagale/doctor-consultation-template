import Offers from '@/components/small-components/Offers';
import { React } from 'react';
import Navbar from '../components/Navbar';
import Hero from './../components/Hero';
import './Global.scss'


function Home() {
  return (
  <main>
<Navbar>
</Navbar>
{/* <div className='header-notfication'>
      <div className="header-text-no">
      Emergency Service Avilable 24/7 on toll free number : 123456789
      </div>
    </div> */}
<Hero></Hero>
<Offers></Offers>
<div></div>
  </main>
  )
}

export default Home;
