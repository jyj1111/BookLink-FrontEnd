import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginDiv = styled.div`
  margin: 6.571rem auto 0 auto;
  width: 85.714rem;
  height: fit-content;
  background: #fff;
  border: 1px rgba(217, 217, 217, 1) solid;
  filter: drop-shadow(0 0.286rem 0.286rem rgba(0, 0, 0, 0.25));
  border-radius: 1.714rem;
`;
export const LogoDiv = styled.div`
  margin: 4.286rem auto 0 auto;
  width: 24.857rem;
  height: 4.571rem;
`;

export const Img = styled.img`
  width: 100%;
  height: inherit;
`;

export const LoginFormDiv = styled.div`
  width: 65.714rem;
  margin: 6.429rem auto 4.143rem auto;
`;

export const LoginForm = styled.form`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const InputDivWithMargin = styled(InputDiv)`
  position: relative;
  margin: 4.286rem 0 1rem 0;
`;

export const Label = styled.label`
  font-size: 1.143rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
`;

export const LoginInput = styled.input`
  width: 40.714rem;
  height: 4.286rem;
  border-radius: 0.857rem;
`;

export const ShowPasswordImg = styled.img`
  position: absolute;
  width: 2.57143rem;
  height: 1.76236rem;
  bottom: 1.257rem;
  right: 1.34rem;
  cursor: pointer;
`;

export const LoginFormFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 21.429rem;
  margin: 3.143rem 0 0 0;
`;

export const LoginFormCheckBox = styled.input`
  width: 1.714rem;
  height: 1.714rem;
  border-radius: 0.429rem;
`;

export const LoginFormFooterLabel = styled.label`
  font-size: 1.143rem;
  color: #787878;
`;

export const StyledLink = styled(Link)`
  font-size: 1.143rem;
  color: #99b1c7;
`;

export const LoginButton = styled.button`
  margin: 6.429rem auto 0.571rem auto;
  width: 42.857rem;
  height: 4.286rem;
  border-radius: 0.857rem;
  background: #003c74;
  color: #fff;
  transition: all 0.1s;

  &:hover {
    background: #002c5c;
  }
`;

export const KakaoLoginButton = styled.div`
  margin: 0 auto 2.571rem auto;
  width: 42.857rem;
  height: 4.286rem;
  color: #000;
  border-radius: 0.857rem;
  background: #fee500;
  transition: all 0.1s;
  display: flex;
  align-items: center;

  img {
    width: 2.57143rem;
    height: 2.42829rem;
    margin: 0 13rem 0 2.14rem;
  }
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: #fedd33;
  }
`;

export const RegisterButton = styled(Link)`
  font-size: 1.143rem;
  line-height: 1.643rem;
  text-align: center;
  text-decoration-line: underline;
  color: #003c74;
`;

export const ErrorMessage = styled.span`
  color: #e30000;
  font-size: 1.143rem;
  position: absolute;
  bottom: -2.571rem;
  left: 0.429rem;
`;
