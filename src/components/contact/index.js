import React, { useState } from "react";
import {
  ContactContainer,
  ContactH1,
  ContactForm,
  ContactFormName,
  ContactFormEmail,
  ValidEmail,
  ContactFormMessage,
  NameH1,
  EmailH1,
  MessageH1,
  SubmitButton,
  SubmitContainer,
} from "./contactElements";

export const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(details);

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");

    let result = await response.json();

    alert(result.status);
  };
  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>_CONTACT</ContactH1>
        <ContactForm onSubmit={handleSubmit}>
          <NameH1 htmlFor="name">NAME</NameH1>
          <ContactFormName type="text" id="name"></ContactFormName>

          <EmailH1 htmlFor="email">EMAIL</EmailH1>
          <ContactFormEmail
            value={message}
            onChange={handleChange}
            type="email"
            id="email"
          ></ContactFormEmail>
          <ValidEmail>{error}</ValidEmail>
          <MessageH1 htmlFor="message">MESSAGE</MessageH1>
          <ContactFormMessage type="text" id="message"></ContactFormMessage>
          <SubmitContainer>
            <SubmitButton type="submit">{status}</SubmitButton>
          </SubmitContainer>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default Contact;
