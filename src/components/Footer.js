import React from "react"
import {
  FooterContainer,
  SocialLinks,
  SocialLink,
  SocialItem,
  GetInTouch,
  MailMe,
} from "./styles/footer"

export default function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialItem>
          <SocialLink href="#">
            <span className="icon-twitter"></span>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href="#">
            <span className="icon-facebook"></span>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href="#">
            <span className="icon-instagram"></span>
          </SocialLink>
        </SocialItem>
      </SocialLinks>
      <GetInTouch>Get in touch</GetInTouch>
      <MailMe href="mailto:m.mouhsni@gmail.com">m.mouhsni@gmail.com</MailMe>
      <p>
        Copyright &copy;{new Date().getFullYear()} All rights reserved | made
        with <i className="icon-heart" aria-hidden="true"></i>
      </p>
    </FooterContainer>
  )
}
