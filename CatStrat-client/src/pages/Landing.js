import React from 'react'
import InfoSection from '../components/Homepage/HomeInfo';
import { discover, manage, signup } from '../components/Homepage/HomeInfo/Data';
import Homepage from '../components/Homepage/Homepage';
import About from '../components/Homepage/HomeAbout';
import Footer from '../components/Homepage/Footer';

function Home() {
  const video = "https://streamable.com/e8vrxk";
  const videoHome = "https://streamable.com/5nnu5j"

  return (
    <>
      <Homepage Video={videoHome} />
      <About />
      <InfoSection Video={video} {...discover}/>
      <InfoSection {...manage}/>
      <InfoSection {...signup}/>
      <Footer />
    </>
  );
}

export default Home;