import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LightTitle, GrayTitle, Highlighted } from "../components/styles/theme"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <LightTitle>Contact me</LightTitle>
      <ContactContainer>
        <div>
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using side form either.
            <br />
            <br />
            <br />
          </p>
          <p>
            Phone: <Highlighted> + 212 606 196 434</Highlighted>
            <br />
            Email: <Highlighted> m.mousni@gmail.com</Highlighted>
            <br />
            Website: <Highlighted> mouhsni.com</Highlighted>
          </p>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <GrayTitle>Send a message!</GrayTitle>
          <InputWrapper>
            <p>
              <label htmlFor="name">Name</label>
              <Input type="text" name="name" id="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <Input type="email" name="email" id="email" />
            </p>
          </InputWrapper>
          <p>
            <label htmlFor="subject">Subject</label>
            <Input type="text" name="subject" id="subject" />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <Textarea name="message" id="message" />
          </p>
          <Button type="submit">Send</Button>
        </form>
      </ContactContainer>
    </Layout>
  )
}

export default ContactPage

const Button = styled.button`
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 40px;
  cursor: pointer;
`
const Textarea = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.transparent};
  background: ${({ theme }) => theme.colors.dark};
  height: 150px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0 10px;
`
const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.transparent};
  background: ${({ theme }) => theme.colors.dark};
  height: 50px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0 20px;
`
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0 40px;
  > div {
    width: 48%;
  }
  form {
    width: 48%;
  }
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > p {
    width: 47%;
  }
`
