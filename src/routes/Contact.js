import React from 'react'
import Navbar from "../components/Navbar";
import FooterNew from '../components/FooterNew';
import Heroimage2 from '../components/Heroimage2';
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Heroimage2 heading="CONTACT." text="Lets have a chat." />
      <Form />
      <FooterNew />
    </div>
  )
}

export default Contact
