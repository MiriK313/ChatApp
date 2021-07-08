import styled from "styled-components";

export const Page = styled.div `
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #dcd9c6;
  flex-direction: column;
`;

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  height: 500px;
  content-
  max-height: 500px;
  overflow: auto;
  width: 90%;
  align-items: center;
  border: 0.3px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;  
  margin-bottom: 25px;
  margin-left:5%;
  background-color: snow;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export const TextArea = styled.input `
  height: fit-content;
  border-radius: 10px;
  padding: 10px 10px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: #000;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
  background-color: snow;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Button = styled.button `
  height: 50px;
  width: 100px;
  color: #46516e;
  margin-top: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #8cd2b4;
    box-shadow: 0px 15px 20px ##c3e8d8;
    color: #000;
    transform: translateY(-7px);
  }
`;

export const Form = styled.form `
  width: 90%;
  display: flex;
  grid-template-columns: 0.4fr 0.8fr;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;


export const Label = styled.label `
  margin: 30px 10px;
`;

export const MessageText = styled.div `
  margin-top: 20px;
  font-size: 10px;
  color: ${({ error }) => (error ? "salmon" : "green")};
  border: ${({ error }) => (error ? "1px solid salmon" : "1px solid green")};

  background-color: mintcream;
  padding: 10px 10px;
  border-radius: 20px;
`;