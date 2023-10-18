
import React, { useRef } from 'react';

import ReactPlayer from 'react-player';

import video from './../assets/images/onevideo.mp4';
import video1 from './../assets/images/power.mp4';
import video2 from './../assets/images/visa.mp4';

import "./Home.css";

const Home = () => {
  const playerRef = useRef(null);
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto text1">
              <div className="row">
                <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 text">
                  <h1> Say Hi to <strong><br />OneCard</strong></h1>
                  <h2> Co-branded Card Issuers</h2>
                  <p> India's best metal credit card. Built with full-stack tech. Backed by the principles of simplicity, transparency, and giving back control to the user.</p>
                  <div className="mt-3">
                    <button className='btn primary__btn'> <a href="" className="btn-get-started">Apply Now</a></button>
                  </div>

                </div>
                <div className="col-lg-6 order-lg-2 header-img ">

                  <video src={video} alt="" autoPlay loop muted controls />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
      <section className='hedden' id=''>
        <div className=' container '>
          <div className='row justify-content-center'>
            <div className='ever'>
              <h1 > No Hidden Fees Ever.</h1>
              <h3> No Joining Fees.</h3>
              <h3> No Annual Fees.</h3>
              <h3> No Rewards Redemption Fees.</h3>
            </div>
          </div>

        </div>

      </section>
      <section>
        <div className='container-fluid'>
          <div className='row col-10 mx-auto'>
            <div className='col-lg-6 power'>
              <div className='row justify-content-center'>
                <video src={video1} alt="" autoPlay="autoplay" loop="loop" muted="muted" controls="true" />


              </div>


            </div>
            <div className='col-lg-6'>
              <div className='row justify-content-right mobile'>
                <h1 className='power'> Powerful <br />mobile app</h1>
                <h3 className='power-h3'> Control all aspects of your co-branded credit card from the powerful OneCard app - transaction limit, domestic/international use, online/offline use, contactless payments and much more.</h3>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto text1">
              <div className="row">
                <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 text">
                  <h1> It's <strong>metal</strong></h1>
                  <h3> A co-branded credit card that is exclusive, and exquisitely crafted with metal, because you deserve only the best. Why settle for plastic cards anymore?</h3>
                  

                </div>
                <div className="col-lg-6 order-lg-2 header-img ">

                  <video src={video2} alt="" autoPlay loop muted controls />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* <section className='visa' id="visa">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10  mx-auto'>
              <div className='row '>
                <div className='col-lg-6 metal'>
                  <h1><strong>It's metal</strong></h1>
                  <h3> A co-branded credit card that is exclusive, and exquisitely crafted with metal, because you deserve only the best. Why settle for plastic cards anymore?</h3>

                </div>
                <div className='col-lg-6 visa-img'>

                  <video src={video2} alt="" autoPlay="autoplay" loop="loop" muted="muted" controls="true" />
                </div>
              </div>

            </div>

          </div>
        </div>

      </section> */}


    </>
  );
};

export default Home;
