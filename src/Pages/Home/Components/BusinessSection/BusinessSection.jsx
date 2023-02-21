import React from 'react'

// Assets | ICONS :
import IMG1 from "../../../../Assets/img1.jpg";
import IMG2 from "../../../../Assets/img2.jpg";
import IMG3 from "../../../../Assets/img3.jpg";
import IMG4 from "../../../../Assets/img4.jpg";

// CSS :
import "./BusinessSection.scss";




const BusinessSection = () => {
    return (
        <>
            <div className="businessSectionContainer">
                <div className="heading">
                    Helping companies turn Ideas into Reality
                </div>
                <div className="line" />
                <div className="cardsBox">
                    {/* {
                        new Array(6).fill(6).map((data, value) => {
                            return (
                                <div className="card">
                                    <div className="imgBox">
                                        <img src={IMG1} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="title">STARTUP INVESMENT</div>
                                        <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis tenetur voluptatibus fuga asperiores corporis velit doloribus maiores? Quae accusamus soluta numquam sapiente culpa eos quaerat odio aspernatur fugit cum.</div>
                                        <div className="btnBox">
                                            <button className="btn">More Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    } */}
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG1} alt="" />
                        </div>
                        <div className="details">
                            <div className="title">BRAND DESIGN</div>
                            <div className="para">Our approach to brand creativity is centered around your story and value potential. We are able to create compelling designs that reflect the values, personality and culture of your brand.</div>
                            <div className="btnBox">
                                {/* <button className="btn">More Details</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG2} alt="" />
                        </div>
                        <div className="details">
                            <div className="title">SOFTWARE DEVELOPMENT</div>
                            <div className="para">When you are building a company or perhaps a startup, you need to build software products that help users fall in love with your brand. We have extensive experience building applications that are database driven, that solve systems and that ultimately reflect your brand.</div>
                            <div className="btnBox">
                                {/* <button className="btn">More Details</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="details">
                            <div className="title">STARTUP Consultation</div>
                            <div className="para">You will receive consultation highly tailored to your business. We listen to your story and your goals, we take into account everything that matters. We plan a strategy to help you prioritise and help you get to PMF.</div>
                            <div className="btnBox">
                                {/* <button className="btn">More Details</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG4} alt="" />
                        </div>
                        <div className="details">
                            <div className="title">PRICING</div>
                            <div className="para">We believe that quality work requires our staff to be well compensated. We never consider pricing when competing for new business. We don’t cut corners and we’re not afraid of pricing. If a project requires it, we will put quality in every aspect of design and development.</div>
                            <div className="btnBox">
                                {/* <button className="btn">More Details</button> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="card">
                        <div className="imgBox">
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="details">
                            <div className="title">STARTUP INVESMENT</div>
                            <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis tenetur voluptatibus fuga asperiores corporis velit doloribus maiores? Quae accusamus soluta numquam sapiente culpa eos quaerat odio aspernatur fugit cum.</div>
                            <div className="btnBox">
                                <button className="btn">More Details</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default BusinessSection;