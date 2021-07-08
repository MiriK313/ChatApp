import React from "react";
import Avatar from "react-avatar";

import {
  MyRow,
  MyMessage,
  PartnerRow,
  PartnerMessage,
  ContactInfo,
  ContactName,
} from "./MessageRowElements";

const MessageRow = ({ message, myMessage, currentUser }) => {
  return (
    <div>
      {myMessage ? (
        <MyRow>
          <ContactInfo rtl={myMessage}>
            <Avatar
              name={currentUser.nickname}
              size="30"
              round={true}
              style={{ marginRight: "2px" }}
              color={currentUser.avatar}
            />
            <ContactName sideright={myMessage}>
              {currentUser.nickname}
            </ContactName>
          </ContactInfo>
          <MyMessage>{message}</MyMessage>
        </MyRow>
      ) : (
        <PartnerRow>
          <ContactInfo rtl={myMessage}>
            <Avatar
              name={currentUser.nickname}
              size="30"
              round={true}
              style={{ marginLeft: "2px" }}
              color={currentUser.avatar}
            />
            <ContactName sideright={myMessage}>
              {currentUser.nickname}
            </ContactName>
          </ContactInfo>
          <PartnerMessage>{message}</PartnerMessage>
        </PartnerRow>
      )}
    </div>
  );
};

export default MessageRow;
