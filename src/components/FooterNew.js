import React from 'react'
import {FaHome, FaPhone, FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";
import './Footer.css'

const FooterNew = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>Bhadrachalam.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                9948301388</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                21pa1a6157@vishnu.edu.in</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the projects</h4>
                <p>This is me Vinay kumar.I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} /> 
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} /> 
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />  
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterNew
