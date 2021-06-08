import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #f9f1e7;
  background: ${({ lightBg }) => (lightBg ? "#F9F1E7" : "#05060B")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #3bcfb2;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 300;
  letter-spacing: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    line-height: 2rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 900;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: ${({ lightText }) => (lightText ? "#F9F1E7" : "#007873")};

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 2.2rem;
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 1.9rem;
  color: ${({ darkText }) => (darkText ? "#007873" : "#F9F1E7")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
