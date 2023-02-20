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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, autem. Ipsa facere quae inventore voluptatibus omnis, eaque reiciendis consectetur modi deserunt repudiandae, beatae delectus eum? Accusantium illo consequatur quam eos.
                    </div>
                    <div className="btnBox">
                        <button className='btn'>Show Details</button>
                    </div>
                </div>
                <div className="imgBox">
                    <img src={BackImg} alt="" />
                </div>
            </div>
        </>
    )
};

export default HeroSection