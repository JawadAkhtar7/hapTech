import React, { useState } from 'react'


import { AiOutlineMenu } from "react-icons/ai"
import Logo from "../../Assets/logo.png"

// CSS :
import "./Header.scss";





const Header = () => {

    const [changeNavbar, setChangeNavBar] = useState(false);
    const changingNavBar = () => {
        if (window.scrollY >= 80) {
            setChangeNavBar(true);
        } else {
            setChangeNavBar(false);
        }
    };
    window.addEventListener("scroll", changingNavBar);


    return (
        <>
            <div className="headerContainer" style={changeNavbar ? { backgroundColor: "white", boxShadow: "0px 0px 17px 1px rgba(128, 128, 128, 0.2)" } : {}}>
                <div className="logoBox">
                    <img src={Logo} alt="" />
                    <p> <span> WEB </span> Counseling </p>
                </div>
                <div className="btnBox">
                    <AiOutlineMenu />
                </div>
            </div>
        </>
    )
}

export default Header