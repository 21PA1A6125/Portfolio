import "./Heroimage.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";

import {Link} from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img"
          src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>I'M Sidhardha</p>
          <h1>React Developer.</h1>
          <div>
            <Link to="/Project" className="btn">projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
            
          </div>
        </div>
    </div >
  );
  
};

export default Heroimage;
