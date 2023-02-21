// Import Requried Components
import React, { useState } from "react";

import { TextField, Button } from "@mui/material";


import MobileCont from "./ContactUsMobbile";

import './ContactUs.scss';







const Contact = () => {


    const [Fullname, useFullNme] = useState({
        FName: "",
        LName: "",
        Email: "",
        Mesg: "",
    });

    const InputEvent = (event) => {
        // console.log(event.target.value);

        const { value, name } = event.target;

        useFullNme((pValue) => {
            return {
                ...pValue,
                [name]: value,

            };
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("YOu First name is =", Fullname.FName,
            "Your Last name is =", Fullname.LName,
            "Your Email is =", Fullname.Email,
            "Your msg is =", Fullname.mesg)
        alert("Your Query has been submitted sucessfully")
    };

    return (
        <>
            <div className="contact_container">
                <form onSubmit={onSubmit}>
                    <div className="Central_div_main">
                        <div className="Middle_div">
                            <span className="cont_contact">CONTACT US</span>

                            <div className="inputs">
                                <TextField
                                    type="text"
                                    name="FName"
                                    label="First Name"
                                    variant="outlined"
                                    onChange={InputEvent}
                                    value={Fullname.FName}
                                    style={{ width: "100%", marginRight: "23px", marginBottom: "5px" }}
                                />

                                <TextField
                                    name='LName'
                                    type="text"
                                    id="outlined-basic"
                                    label="Last Name"
                                    onChange={InputEvent}
                                    value={Fullname.LName}
                                    variant="outlined"
                                    style={{ width: "100%", marginRight: "2%" }}
                                />

                                <TextField
                                    name="Email"
                                    type="email"
                                    id="outlined-basic"
                                    label="Email Adress"
                                    onChange={InputEvent}
                                    value={Fullname.Email}
                                    variant="outlined"
                                    style={{ width: "100%", marginRight: "2%", color: "black" }}
                                />
                            </div>

                            <div className="textfield">
                                <TextField
                                    name="mesg"
                                    id="outlined-multiline-static"
                                    label="Entre Your Text Here"
                                    onChange={InputEvent}
                                    value={Fullname.mesg}
                                    multiline
                                    rows={10}
                                    style={{ width: "100%", marginTop: "2%" }}
                                    variant="outlined"
                                />
                            </div>

                            <div className="button" style={{ display: "flex", justifyContent: "end", margin: "1rem 0" }}>
                                <Button id='materialbtn4' variant="contained" type="submit" >
                                    Contact
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mbl_cont">
                        <MobileCont />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;