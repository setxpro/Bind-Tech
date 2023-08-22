import styled from "styled-components";

import { BsEye, BsEyeSlash, BsCheck } from "react-icons/bs";

export const ShowPass = styled(BsEye)`
  font-size: 2em;
  color: #acb0cc;
`;
export const ShadowPass = styled(BsEyeSlash)`
  font-size: 2em;
  color: #acb0cc;
`;

export const CheckIcon = styled(BsCheck)`
  color: #fff;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: #2f3248;
`;

export const LeftSideSignIn = styled.div`
  flex: 2;
  position: relative;
  padding: 1rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const RightSideSignIn = styled.div`
  flex: 1;
  position: relative;
  padding: 1rem;

  display: flex;
  justify-content: center;
`;

export const ContentImage = styled.div`
  background: #25293c;
  height: 100%;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex: 1;

  img {
    width: 50%;
  }

  #image {
    z-index: 99;
  }

  #mask {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 200px;
  }
`;

export const ContainerRight = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2,
  h3 {
    color: #acb0cc;
  }

  h2 {
    font-weight: 600;
  }
  h3 {
    font-weight: 300;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    #btn-inherit {
      align-self: flex-end;
      background: transparent;
      border: none;
      padding: 7px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: 0.5s ease;

      &:hover {
        background: #5555;
      }
    }

    #signin {
      background-color: #7367f0;
      padding: 10px 0;
      border-radius: 8px;
      font-size: 1em;
      font-weight: 600;
      margin-top: 1rem;
      cursor: pointer;
      transition: 0.5s ease;
      color: #FFF;
      border: 0;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 1.2em;
    color: #acb0cc;
  }

  input {
    width: 100%;
    padding: 0.2rem 4px;
    font-size: 1.5em;
    border: 1px solid #acb0cc;
    border-radius: 5px;
    background: transparent;
    color: #acb0cc;
    outline: none;
  }
`;
export const InputRadioArea = styled.div<{ persistedlogin: boolean | string; }>`
  display: flex;
  justify-content: space-between;

  a {
    color: #7899f9;
    text-decoration: none;
  }

  #content-check {
    display: flex;
    align-items: center;
    gap: 10px;

    label {
      color: #acb0cc;
      font-size: 0.9em;
    }

    #check {
      cursor: pointer;
      width: 20px;
      height: 20px;
      border: 1px solid
        ${(props) => (eval(`${props.persistedlogin}`) ? "#7367f0" : "#acb0cc")};
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${(props) =>
        eval(`${props.persistedlogin}`) ? "#7367f0" : "transparent"};
    }
  }
`;

export const ContentRegisterArea = styled.div`
  h4 {
    font-size: 1em;
    font-weight: 400;
    color: #acb0cc;

    a {
      color: #7899f9;
      text-decoration: none;
    }
  }
`;
