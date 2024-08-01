import React from 'react'
import Navbar from "../components/Navbar";
import FooterNew from '../components/FooterNew';
import Heroimage2 from '../components/Heroimage2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Heroimage2  heading="ABOUT." text="I'm a React Developer."/>
      <AboutContent/>
      <FooterNew />

    </div>
  );
};

export default About;
