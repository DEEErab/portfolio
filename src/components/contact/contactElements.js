import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 900px;
  width: 100vw;
  background-color: #c0d6df;
`;

export const ContactH1 = styled.h1`
  margin-top: 5vh;
  font-size: 2rem;
  color: white;
  margin-bottom: 80px;
`;

export const ContactForm = styled.form`
  text-align: left;
`;

export const ContactFormName = styled.input`
  width: 325px;
  height: 35px;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const ContactFormEmail = styled.input`
  width: 325px;
  height: 35px;
  border-radius: 10px;
`;

export const ValidEmail = styled.p`
  margin-bottom: 30px;
  padding-bottom: 0px;
  color: red;
`;

export const ContactFormMessage = styled.textarea`
  text-align: start;
  width: 325px;
  height: 400px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 800px;
  }
`;

export const NameH1 = styled.h1`
  font-size: 1rem;
  color: white;
  margin-right: 250px;
`;

export const EmailH1 = styled.h1`
  font-size: 1rem;
  color: white;
  margin-right: 250px;
`;

export const MessageH1 = styled.h1`
  font-size: 1rem;
  color: white;
  margin-right: 250px;
`;

export const SubmitContainer = styled.div`
  text-align: center;
`;

export const SubmitButton = styled.button`
  border-radius: 25px;
  margin-top: 20px;
  height: 25px;
  width: 75px;
`;
