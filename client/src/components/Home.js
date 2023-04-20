import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./css/Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Book a Doctor for Home Medical Examination</h1>
        <p>
          Welcome to our website, where you can easily book a doctor for a home
          medical examination. Our team of experienced doctors will provide
          comprehensive medical checkups in the comfort of your home.
        </p>
        <div className="home-btns">
          <Link to="/services" className="btn-primary">
            Book Now
          </Link>
          <Link to="/doctors" className="btn-secondary">
            Meet our Doctors
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
