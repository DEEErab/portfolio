import React from "react";
import {
  ContactContainer,
  ContactH1,
  ContactForm,
  ContactFormEmail,
  ContactFormSubject,
  ContactFormMessage,
  EmailH1,
  SubjectH1,
  MessageH1,
} from "./contactElements";

export const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>_CONTACT</ContactH1>
        <ContactForm>
          <EmailH1>EMAIL</EmailH1>
          <ContactFormEmail></ContactFormEmail>
          <SubjectH1>SUBJECT</SubjectH1>
          <ContactFormSubject></ContactFormSubject>
          <MessageH1>MESSAGE</MessageH1>
          <ContactFormMessage></ContactFormMessage>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default Contact;
