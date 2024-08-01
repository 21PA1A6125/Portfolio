import React from  "react";

import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      {/* <Router> */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Project" element={<Project/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
