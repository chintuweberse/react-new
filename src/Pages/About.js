import React from "react";

import images from "./../assets/images/one11.jpg";

import "./Home.css";

const About = () => {
  return (
    <div className="main">
      <div className="navbar">
        <h3>
          <img src="" alt="" />
          wberse
        </h3>
      </div>
      <div className="menu">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-12 get-a">
                <h1>
                  Get a Free <br /> Metal <br /> <strong className="credit"> Credit Card</strong> 
                </h1>
                <p> Without getting away from your Phone.</p>
                <input
                  type="number"
                  placeholder="Apply with your phone no."
                  className="phone"
                />
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    
                    By singing up I agree to the
                    <a href="">
                      Terms of
                      <br /> Use
                    </a>
                    and <a href="">Privacy Policy </a> of One Card, <br />
                    CIBIL and Experinc.
                  </p>
                  <div className="read-more-opened">
                    <br />
                    <br />I agree to OneCard’s Terms of Use and Privacy Policy
                    and authorise them to communicate via SMS, Email and
                    WhatsApp. I hereby request for a copy of my credit
                    information and /or aggregates on my registered email ID or
                    through my OneCard account, and authorise Experian and CIBIL
                    to also provide the same to OneConsumer Pvt. Ltd. on my
                    behalf.
                    <button type="button" className="button">
                      <b> Read less.</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
                <div className="col-12 header-img-">
                <img src ={images} alt="one11" className="img-fluid animated"/>
                </div>
            </div>
               

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
