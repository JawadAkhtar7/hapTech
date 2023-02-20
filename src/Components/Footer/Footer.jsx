import React from "react";


import { BsInstagram, BsGoogle, BsYoutube } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai"

// css 
import "./Footer.scss";



const Footer = () => {

    return (
        <div className="main_footer">
            <div className="right_footer">
                {/* <div className="sec_1">
                    <div className="heading">Tools</div>
                    <div className="menu">Publishing</div>
                    <div className="menu">Analytics</div>
                    <div className="menu">Engagement</div>
                    <div className="menu">Start Page</div>
                    <div className="menu">Extras</div>
                </div> */}
                <div className="sec_1">
                    <div className="heading">Resources</div>
                    <div className="menu">Blog</div>
                    <div className="menu">Content Library</div>
                    <div className="menu">Browser Extension</div>
                    <div className="menu">Free Image Editor</div>
                </div>
                <div className="sec_1">
                    <div className="heading">Support</div>
                    <div className="menu">Help Center</div>
                    <div className="menu">Status</div>
                    <div className="menu">Changelog</div>
                    <div className="menu">Product Roadmap</div>
                </div>
                <div className="sec_1">
                    <div className="heading">Company</div>
                    <div className="menu">About</div>
                    <div className="menu">Transparency</div>
                    <div className="menu">Careers</div>
                    <div className="menu">Accessibility</div>
                    <div className="menu">Press</div>
                    <div className="menu">Sitemap</div>
                </div>
                {/* <div className="sec_1">
                    <div className="heading">Support</div>
                    <div className="menu">Help Center</div>
                    <div className="menu">Status</div>
                    <div className="menu">Changelog</div>
                    <div className="menu">Product Roadmap</div>
                </div>
                <div className="sec_1">
                    <div className="heading">Resources</div>
                    <div className="menu">Blog</div>
                    <div className="menu">Content Library</div>
                    <div className="menu">Browser Extension</div>
                    <div className="menu">Free Image Editor</div>
                </div> */}
            </div>
            <div className="copyright_box">
                <div className="line_break"></div>
                <div className="copyright">Website Design by Stratedia | © Copyright 2022 | All Rights Reserved | Privacy Policy | Website Design | SEO Company CT</div>
                <div className="social_box">
                    <FaFacebookF className="icon" />
                    <BsInstagram className="icon" />
                    <FaLinkedinIn className="icon" />
                    <BsTwitter className="icon" />
                    <BsYoutube className="icon" />
                    <BsGoogle className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
