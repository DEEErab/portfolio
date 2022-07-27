import React from "react";
import {
  ContactContainer,
  ContactH1,
  ContactForm,
  ContactFormName,
  ContactFormEmail,
  ContactFormMessage,
  NameH1,
  EmailH1,
  MessageH1,
} from "./contactElements";

export const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>_CONTACT</ContactH1>
        <ContactForm methon="POST">
          <NameH1 htmlFor="name">NAME</NameH1>
          <ContactFormName type="text"></ContactFormName>
          <EmailH1 htmlFor="emal">EMAIL</EmailH1>
          <ContactFormEmail type="email"></ContactFormEmail>
          <MessageH1 htmlFor="message">MESSAGE</MessageH1>
          <ContactFormMessage type="text" id="message"></ContactFormMessage>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default Contact;
