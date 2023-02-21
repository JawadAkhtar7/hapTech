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
                        We are committed to delivering high quality products and services that exceed your expectations. We use state of the art technology and resources and our people are committed to providing an exceptional experience.
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