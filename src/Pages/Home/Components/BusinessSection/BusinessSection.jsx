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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus consequatur vel culpa atque facilis quia, minima odit dignissimos voluptate hic cumque totam quibusdam. Assumenda corrupti ipsa incidunt esse totam!
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
                            <div className="title">STARTUP INVESMENT</div>
                            <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis tenetur voluptatibus fuga asperiores corporis velit doloribus maiores? Quae accusamus soluta numquam sapiente culpa eos quaerat odio aspernatur fugit cum.</div>
                            <div className="btnBox">
                                <button className="btn">More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG2} alt="" />
                        </div>
                        <div className="details">
                            <div className="title">STARTUP INVESMENT</div>
                            <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis tenetur voluptatibus fuga asperiores corporis velit doloribus maiores? Quae accusamus soluta numquam sapiente culpa eos quaerat odio aspernatur fugit cum.</div>
                            <div className="btnBox">
                                <button className="btn">More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
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
                    </div>
                    <div className="card">
                        <div className="imgBox">
                            <img src={IMG4} alt="" />
                        </div>
                        <div className="details">
                            <div className="title">STARTUP INVESMENT</div>
                            <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis tenetur voluptatibus fuga asperiores corporis velit doloribus maiores? Quae accusamus soluta numquam sapiente culpa eos quaerat odio aspernatur fugit cum.</div>
                            <div className="btnBox">
                                <button className="btn">More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessSection;