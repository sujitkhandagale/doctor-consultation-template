"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function MobileMenu() {
    const [isMobilemenu, setMobilemenushow] = useState("false");
    const ToggleClass = () => {
        setMobilemenushow(!isMobilemenu);
         };
  return (
    <div>
        <div className="mobile-menu">
<button onClick={ToggleClass}> <GiHamburgerMenu size={30} color="white" /></button>
</div>
<div  className={isMobilemenu ? "setMobilemenuhide" : "setMobilemenushow"}>
njnjn
</div>

    </div>
  )
}

export default MobileMenu