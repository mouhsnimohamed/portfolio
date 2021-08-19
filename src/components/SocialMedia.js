import React from "react"
import styled from "styled-components"

const SocialMedia = ({ color = "light", justifyContent = "center" }) => (
  <SocialLinks justifyContent={justifyContent}>
    <SocialItem>
      <SocialLink
        color={color}
        target="_blank"
        href="https://twitter.com/MohamedMouhsni"
      >
        <span className="icon-twitter"></span>
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        color={color}
        target="_blank"
        href="https://github.com/mouhsnimohamed"
      >
        <span className="icon-github"></span>
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        color={color}
        target="_blank"
        href="https://www.linkedin.com/in/mohamed-mouhsni/"
      >
        <span className="icon-linkedin2"></span>
      </SocialLink>
    </SocialItem>
  </SocialLinks>
)

export default SocialMedia

const SocialLinks = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  margin-bottom: 60px;
`
const SocialItem = styled.div`
  margin: 0 5px;
`
const SocialLink = styled.a`
  height: 60px;
  width: 60px;
  color: ${props =>
    props.color === "light"
      ? "rgba(255, 255, 255, 0.5)"
      : props.theme.colors.primary};
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  [class^="icon-"] {
    font-size: 26px;
  }

  &:hover {
    color: ${props =>
      props.color === "light" ? props.theme.colors.primary : "white"};
  }
`
