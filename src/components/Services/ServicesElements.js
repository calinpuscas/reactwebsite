import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f1e7;

  @media screen and (max-width: 768px) {
    height: 1600px;
  }

  @media screen and (max-width: 480px) {
    height: 1800px;
  }
  @media screen and (max-width: 380px) {
    height: 2000px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  padding: 0 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr, 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.2rem;
  }
`;

export const ServicesCard = styled.div`
  background: #007873;
  color: #3bcfb2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2.5rem;
  height: 470px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    height: 500px;
  }
  @media screen and (max-width: 380px) {
    max-width: 350px;
    height: 550px;
  }
`;

export const ServicesIcon = styled.img`
  height: 10rem;
  width: 10rem;
  margin-bottom: 5px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 50%;
  background: #f9f1e7;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #007873;
  font-weight: 900;
  margin-bottom: 24px;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #f9f1e7;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #f9f1e7;
  font-weight: 100;
`;
