import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #007873;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 12px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #f9f1e7;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinksTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 5px;
  color: #05060b;

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const FooterLink = styled(Link)`
  color: #f9f1e7;
  font-size: 1rem;
  font-weight: 100;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #05060b;
    font-weight: 500;
    border-bottom: 1px solid #05060b;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 15px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #f9f1e7;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const WebsiteRights = styled.small`
  color: #f9f1e7;
  margin-bottom: 5px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
`;

export const SocialIconLink = styled.a`
  color: #f9f1e7;
  font-size: 3rem;
  font-weight: 100;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
