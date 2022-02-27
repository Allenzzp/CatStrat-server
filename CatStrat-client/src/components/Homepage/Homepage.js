import React from "react";
import { useEffect, useRef, useState } from 'react';
import "./homepage.scss";
import { gsap, Power3 } from 'gsap';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import HomeNavbar from "./HomeNav";
import ReactPlayer from "react-player"
import {BrowserRouter as Link} from "react-router-dom"
import Video2 from "../../videos/1.mp4"

function Homepage({Video}) {
  let navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setLoginStatus(true)
    }

    if (loginStatus) {
      return navigate("/dashboard")
    }

  }, [loginStatus])

  const toLogin = () => {
    navigate("/login")
  }

  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = gsap.timeline();

  useEffect(() => {

    // Content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1]
    const contentButton = content.children[2]

    gsap.to(app, { duration: 0, css: { visibility: 'visible' } })

    //Content Animation
    gsap.from([headlineFirst.children, headlineSecond.children, headlineThird.children], { duration: 1, y: 100, stagger: { each: 0.15, ease: Power3.easeOut }, delay: .8 })
    gsap.from(contentP, { duration: 1, y: 40, opacity: 0, ease: Power3.easeOut, delay: 1.8 })
    gsap.from(contentButton, { duration: 1, y: 40, opacity: 0, ease: Power3.easeOut, delay: 2 })
  })

  return (
  <>
    <HomeNavbar />
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner-topline"></div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Use Your Strategies</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">To Beat The Market</div>
                </div>
                {/* h1 is children[0] */}
              </h1>
              {/* p is children[1] */}
              <p>Realize your gains. Realize your potential.</p>
              <div className="btn-row">
                <button className="explore-button" onClick={toLogin}>Get Started
                  <div className="arrow-icon">
                    <FaArrowAltCircleRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image phone">
              </div>
              <video className="videohome" autoPlay loop muted src={Video2} type='video/mp4' />
              {/* <ReactPlayer
              url={Video}
              playing={true}
              width={600}
              height={750}
              loop={true} 
              muted
              controls
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>  
  );
}

export default Homepage;