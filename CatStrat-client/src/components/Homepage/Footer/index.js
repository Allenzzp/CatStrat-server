import React from 'react'
import { Hr, FooterParagraph, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterCSS';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Products</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact Us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Products</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact Us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Products</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact Us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Products</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact Us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <Hr />
        <FooterParagraph>All investments involve risks, including the possible loss of capital. Past performance is no guarantee of future results.</FooterParagraph>
        <FooterParagraph>No content on the CatStrat LLC website shall be considered as a recommendation or solicitation for the purchase or sale of securities, options, or other investment products. All information and data on the website is for reference only and no historical data shall be considered as the basis for judging future trends.</FooterParagraph>
        <FooterParagraph>There is always the potential of losing money when you invest in securities or other financial products. Investors should consider their investment objectives and risks carefully before investing.</FooterParagraph>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>CatStrat © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer;