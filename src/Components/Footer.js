

import "./FooterStyles.css";
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
        <div className="location">
        <FaHome size={20} style={{color:"#fff",marginRight:"2em"}} />

        <div>
            <p>123 Housing Society,India</p>
           
        </div>

        <div className="phone">
        <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2em"}} />
        8340703278</h4>
       
        </div>

        <div className="email">
        <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2em"}} />
       samikchaprasad0606@gmail.com</h4>
       
        </div>
        </div>
      </div>



      <div className="right">
        <h4>About myself</h4>
        <p>This is me Samiksha Kumari. I am a fresher React Developer and looking forword for new opportunities. </p>
      <div className="social">
      <FaFacebook size={30} style={{color:"#fff",marginRight:"1em"}} />
      <FaTwitter size={30} style={{color:"#fff",marginRight:"1em"}} />
      <FaLinkedin size={30} style={{color:"#fff",marginRight:"1em"}} />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
