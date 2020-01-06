import React from "react"
import { FooterContainer, GetInTouch, MailMe, Copyright } from "./styles/footer"
import SocialMedia from "./SocialMedia"

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMedia />
      <GetInTouch>Get in touch</GetInTouch>
      <MailMe href="mailto:m.mouhsni@gmail.com">m.mouhsni@gmail.com</MailMe>
      <Copyright>
        Copyright &copy;{new Date().getFullYear()} All rights reserved | made
        with <i className="icon-heart" aria-hidden="true"></i> by Mohamed
        MOUHSNI
        <br />
        Inspired by <a href="https://colorlib.com/">Colorlib</a>
      </Copyright>
    </FooterContainer>
  )
}
