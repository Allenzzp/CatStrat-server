import styled from 'styled-components'

export const AboutContainer = styled.div`
  height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://wallpaperaccess.com/full/1550291.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const AboutWrapper = styled.div`
  max-width: 1000px;
  // height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 68px;
  padding: 0 50px;
`

export const AboutCard = styled.div`
  background: #fff;
  border: 2px double rgb(64, 158, 64);
  font-family: "Roboto";
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba (0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.06);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 7px 10px 14px rgba(102, 135, 105, 0.77);
  }
`

export const AboutIcon = styled.img`
  height: 160px;
  width: 160px;
  box-sizing: border-box;
  border: 1px solid gray;
  margin-top: 40px;
`

export const AboutH1 = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 4.0rem;
  color: #fff;
  margin-bottom: 34px;
  margin-top: 64px;
  text-shadow: 3px 3px 25px rgb(7, 107, 7);
`

export const AboutH2 = styled.h2`
  font-family: "Patua One";
  font-size: 2rem;
  margin-bottom: 10px;
  margin-top: 24px;
`

export const AboutP = styled.p`
  font-size: 1rem;
  text-align: center;
`