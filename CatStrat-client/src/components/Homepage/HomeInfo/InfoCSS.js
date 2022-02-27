import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #000;
  background: ${({lightBg}) => (lightBg ? '#fff' : '#f5f5f5')};
`
export const VideoBg = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.5;
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 940px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  margin-top: 50px;
  display: grid;
  align-items: center;
  grid-auto-columns: auto;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 150px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  font-family: "Sans Serif";
  color: #74c947;
  font-size: 22px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 22px;
`

export const Heading = styled.h1`
  font-family: "Vollkorn";
  margin-bottom: 18px;
  font-size: 48px;
  // line-height: 11px;
  font-weight: 800px;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606' )};
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 26px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-right: 0;
  position: relative;
`

export const Discover = styled.img`
  margin-top: 75px;
  width: 600px;
  height: 380px;
  padding-right: 0;
  position: relative;
`

export const Signup = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 200px;
  position: relative;

`