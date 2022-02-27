import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Hr = styled.hr`
  width: 1300px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 2px solid white;
  background-color: white;
`

export const FooterParagraph = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
  font: 16px;
  color: #fff;
  margin-left: 200px;
  margin-right: 200px;
`

export const FooterContainer = styled.footer`
  background-color: #101522;
`

export const FooterWrap = styled.div`
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  jsutify-content: center;
`

export const FooterLinksWrapper = styled.div`
  display: flex;
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff
`

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 16px;
  color: #fff;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-botttom: 0.5rem;
  font-size: 16px;

  &:hover {
    color: #74c947;
    transition: 0.3s ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  margin-left: 200px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  padding-bottom: 24px;
  margin: 40px auto 0 auto;
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-left: 100px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  padding-left: 30px;
  margin-bottom: 20px;
`