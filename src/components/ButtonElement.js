import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 5rem;
  background: ${({ primary }) => (primary ? "#3BCFB2" : "#F9F1E7")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1rem 3rem" : "0.8rem 1.8rem")};
  color: ${({ dark }) => (dark ? "#F9F1E7" : "#007873")};
  font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.3rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ primary }) => (primary ? "#007873" : "#3bcfb2")};
  }
`;
