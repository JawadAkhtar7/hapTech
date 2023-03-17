import React from 'react'

import BackImg from "../../../../Assets/hero.png"

// CSS :
import "./HeroSection.scss"




const HeroSection = () => {
    return (
        <>
            <div className="heroSectionContainer">
                <div className="headingBox">
                    <div className="title">
                        SERVICES
                    </div>
                    <div className="para">
                    We are committed to delivering top-notch: <br />
                    <li>iOS Applications</li>
                    <li>Android Applications</li>
                    <li>Web Applications</li>
                    </div>
                    {/* <div className="btnBox">
                        <button className='btn'>Show Details</button>
                    </div> */}
                </div>
                <div className="imgBox">
                    <img src={BackImg} alt="" />
                </div>
            </div>
        </>
    )
};

export default HeroSection