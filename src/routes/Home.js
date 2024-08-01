import React from 'react'
import Navbar from "../components/Navbar";
import Heroimage from "../components/Heroimage";
// import Footer from "../components/Footer";
import FooterNew from '../components/FooterNew';
import WorkNew from"../components/WorkNew";

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Heroimage />
      {/* <Footer /> */}
      <WorkNew />
      <FooterNew />
    </div>
  );
};

export default Home;
