import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// CSS :
import "./Header.scss";





const Header = () => {
    const Navigate = useNavigate()
    const location = useLocation()

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
                <div className="logoBox" onClick={() => Navigate("/")}>
                    <p><span>HAP-TECH</span></p>
                </div>
                <div className="btnBox">
                    {/* <AiOutlineMenu /> */}
                    {
                        location && location.pathname !== "/contact" &&
                        <button className='btn' onClick={() => Navigate("/contact")}>Contact Us</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Header