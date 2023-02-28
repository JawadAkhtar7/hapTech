import React from 'react'

// Assets | ICONS :
import IMG1 from "../../../../Assets/img1.jpg";
import IMG2 from "../../../../Assets/img2.jpg";
import IMG3 from "../../../../Assets/img3.jpg";
import IMG4 from "../../../../Assets/img4.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import C1 from "../../../../Assets/c1.jpg";
import C2 from "../../../../Assets/c2.jpg";
import C3 from "../../../../Assets/c3.jpg";
import C4 from "../../../../Assets/c4.jpg";
import C5 from "../../../../Assets/c5.jpg";
import C6 from "../../../../Assets/c6.jpg";


// Helper:
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CSS :
import "./ArticalsSection.scss";



let ImgsArray = [C1 , C2 , C3 , C4 , C5 , C6]
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", fontSize: "1.5rem", color: "black" }}
            onClick={onClick}
        >
            <BsArrowRight />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", fontSize: "1.5rem", color: "black" }}
            onClick={onClick}
        >
            <BsArrowLeft />
        </div>
    );
}
const ArticalsSection = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    return (
        <>
            <div className="articalsSectionContainer">
                <div className="heading">
                    {/* LATEST ARTICLES FROM BLOG */}
                    PROJECTS
                </div>
                <div className="line" />
                <div className="sliderBox">
                    <Slider {...settings}>
                        {
                            ImgsArray.map((imgLink, value) => {
                                return (
                                    <div key={value}>
                                        <div className="card">
                                            <div className="imgBox">
                                                <img src={imgLink} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* {
                            new Array(6).fill(6).map((data, value) => {
                                return (
                                    <div key={value}>
                                        <div className="card">
                                            <div className="imgBox">
                                                <img src={IMG4} alt="" />
                                            </div>
                                            <div className="details">
                                                <div className="title">STARTUP INVESMENT</div>
                                                <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis tenetur voluptatibus fuga asperiores corporis velit doloribus maiores? Quae accusamus soluta numquam sapiente culpa eos quaerat odio aspernatur fugit cum.</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } */}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ArticalsSection;