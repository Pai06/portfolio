import "./contact.css"
import Phone from "../../img/phonenew.png";
import Email from "../../img/emailnew.png";
import Address from "../../img/addressnew.png";
import { useRef } from "react";
import emailjs from "emailjs-com";
import React, {useState,useContext} from "react";
import { ThemeContext } from "../../context";
const Contact = () => {
    const formRef=useRef();
    const [done,setDone]=useState(false)
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    const handleSubmit = (e) =>{
        e.preventDefault(); //prevents relaoding of the page
        // code snippet for emailjs 
        emailjs.sendForm('service_w1knubw', 'template_cd07yqr', formRef.current, 'x8-e_YaxGWAYAJvLr')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        
    }
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's get in touch!!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            +91 9482015585
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            pranitprasant6@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            Koramangala, Bangalore, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Get in touch for any new project ideas or collaboration
                        by dropping in your contact details and ideas below ;))
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>  
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && <p>Thank you! Your response has been successfully submitted!</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;