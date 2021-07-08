import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #dcd9c6;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 0.3px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
  background-color: snow;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export const TextArea = styled.textarea`
  height: 75px;
  border-radius: 10px;
  margin-top: 20px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
  background-color: snow;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Button = styled.button`
  width: 75%;
  height: 50px;
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
    background-color: tan;
    box-shadow: 0px 15px 20px #d2b48c;
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const Form = styled.form`
  width: 400px;
  display: grid;
  grid-template-columns: 0.4fr 0.8fr;
  justify-content: center;
  align-content: center;
  grid-auto-flow: column;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const MyMessage = styled.div`
  width: 45%;
  background-color: pink;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-radius: 15px 0px 15px 15px;
`;

export const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

export const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 0px 15px 15px 15px;
`;
