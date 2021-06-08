import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(0, 120, 115, 1) 0%,
    rgba(59, 207, 178, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and(max-width: 400px) {
    heigh: 100%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 2rem;
  margin-top: 2rem;
  text-decoration: none;
  color: #fff;
  font-weight: 900;
  font-size: 3rem;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and(max-width: 480px) {
    margin-left: 1rem;
    margin-top: 0.5rem;
    font-size: 2rem;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and(max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #05060b;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and(max-width: 400px) {
    padding: 2rem 2 rem;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 1rem;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #00c9ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 1rem 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 1.3rem;
  color: #fff;
  font-size: 1rem;
`;
