import React, { useState } from "react";

import { TextField, Button } from "@mui/material";

import emailjs from "@emailjs/browser"



const MobileCont = () => {

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
  const onSubmit = async (event) => {
    event.preventDefault();
    let data = {
      email: Fullname.Email,
      firstName: Fullname.FName,
      lastName: Fullname.LName,
      message: Fullname.Mesg
    }

    try {
      const res = await emailjs.send("service_2os0sqc", "template_2woot4l", data, "-wopyn9wwm-lP2vIb")
      console.log(res);
      alert("Message Sent Success")
      window.location.href = "/"
    } catch (err) {
      console.log(" ERROR------------>", err)
    }
  };


  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="central_div_mbl">
          <div className="Middle_div">
            <span className="cont_contact_mbl">CONTACT US</span>

            <div className="inputs">
              <TextField
                type="text"
                name="FName"
                label="First Name"
                variant="outlined"
                onChange={InputEvent}
                value={Fullname.FName}
                style={{ width: "100%", marginRight: "23px" }}
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

            <div className="button" >
              <Button id='materialbtn4' variant="contained" type="submit">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MobileCont;