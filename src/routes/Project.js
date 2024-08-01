import React from 'react'
import Navbar from "../components/Navbar";
import FooterNew from '../components/FooterNew';
import Heroimage2 from '../components/Heroimage2';
import PricingCard from "../components/PricingCard";
import WorkNew from '../components/WorkNew';

const Project = () => {
  return( 
    <div>
      {/* <Navbar /> */}
      <Heroimage2 heading="PROJECTS." text="Some of my most recent works" />
      <WorkNew />
      <PricingCard />
      <FooterNew />
    </div>
  );
  
};

export default Project;
