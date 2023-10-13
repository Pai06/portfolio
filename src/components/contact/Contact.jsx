import "./contact.css";
import Phone from "../../img/phonenew.png";
import Email from "../../img/mail2.jpg";
import Address from "../../img/address2.png";
import { useRef } from "react";
import emailjs from "emailjs-com";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    // code snippet for emailjs
    emailjs
      .sendForm("service_a60m0s9", "template_bugmdzc", formRef.current, "ov8i4vxYZm9j-xKar")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset(); // Reset the form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's get in touch!!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9482015585
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              pranitprasant6@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Koramangala, Bangalore, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Get in touch for any new project ideas or collaboration by dropping in your contact details and ideas below ;))
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className={darkMode ? "dark-mode-text" : ""}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className={darkMode ? "dark-mode-text" : ""}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className={darkMode ? "dark-mode-text" : ""}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              className={darkMode ? "dark-mode-text" : ""}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && <p>Thank you! Your response has been successfully submitted!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
