import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonCSS'
import { InfoContainer, Signup, Discover, VideoBg, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoCSS';
import ReactPlayer from "react-player";
import one from "../../../images/two.png";
import two from "../../../images/twotwo.png";
import "./notify.scss"

import Aos from "aos";
import "aos/dist/aos.css";

function InfoSection({lightBg, Video, primary, dark, dark2, id, imgStart, topLine, lightText, darkText, Headline, description, buttonLabel, img, alt}) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  

  return (
  <>
    <InfoContainer lightBg={lightBg}>
      <InfoWrapper id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper data-aos="fade-up" data-aos-delay="150">
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{Headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button to={id==="signup"? "/register": "/login"}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap data-aos="fade-up">
              {id === "discover" && 
              <>
                <Discover src={img} alt={alt}/>
              </>}
              {id === "manage" && 
              <>
                <Img src={img} alt={alt}/>
                <img className="notify-one" src={one} data-aos="fade-down"/>
                <img className="notify-two" src={two} data-aos="fade-down" data-aos-delay="500"/>
              </>} 
              {id === "signup" && 
              <>
                <Signup src={img} alt={alt}/>
              </>}
            </ImgWrap> 
          {/* {!Video ?          
            :
            <ReactPlayer
              url={Video}
              playing={true}
              width={500}
              loop={true} 
              muted
              controls
            />} */}
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  </>  
  )
}

export default InfoSection;