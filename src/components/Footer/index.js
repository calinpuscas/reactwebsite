import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to="/">How it Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Help Links</FooterLinksTitle>
              <FooterLink to="/">Contracts</FooterLink>
              <FooterLink to="/">Developing</FooterLink>
              <FooterLink to="/">Departments</FooterLink>
              <FooterLink to="/">Branches</FooterLink>
              <FooterLink to="/">EU Control</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>Security</FooterLinksTitle>
              <FooterLink to="/">Passwords</FooterLink>
              <FooterLink to="/">Server Side</FooterLink>
              <FooterLink to="/">Teams</FooterLink>
              <FooterLink to="/">Supervising</FooterLink>
              <FooterLink to="/">Prices</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Contact</FooterLinksTitle>
              <FooterLink to="/">Adress</FooterLink>
              <FooterLink to="/">Email</FooterLink>
              <FooterLink to="/">Phones</FooterLink>
              <FooterLink to="/">Bank Club</FooterLink>
              <FooterLink to="/">Members</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              BankStar®
            </SocialLogo>
            <WebsiteRights>
              BankStar® -­­ © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/user"
                target="blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/user"
                target="blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
