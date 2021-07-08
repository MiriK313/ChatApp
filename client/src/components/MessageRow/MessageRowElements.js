import styled from "styled-components";

export const MyRow = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;

  margin-top: 10px;
`;

export const MyMessage = styled.div `
  width: 45%;
  background-color: #82cf87;
  color: #000;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-radius: 15px 0px 15px 15px;
  margin-left: auto;
  margin-right: 30px;
`;

export const PartnerRow = styled(MyRow)
`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PartnerMessage = styled.div `
  width: 45%;
  background-color: #82cfae;
  color: #000;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 30px;
  text-align: center;
  border-radius: 0px 15px 15px 15px;
`;

export const RowContentDiv = styled.div `
  display: flex;
  flex-direction: column;
`;

export const ContactInfo = styled.div `
  display: flex;
  flex-direction: row;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

export const ContactName = styled.label `
  margin-right: ${({ sideright }) => (sideright ? "4px" : "0px")};
  margin-left: ${({ sideright }) => (sideright ? "0px" : "4px")};
`;