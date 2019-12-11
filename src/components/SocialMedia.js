import React from "react"
import styled from "styled-components"

const SocialMedia = () => (
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
)

export default SocialMedia

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`
const SocialItem = styled.div`
  margin: 0 5px;
`
const SocialLink = styled.a`
  height: 60px;
  width: 60px;
  color: rgba(255, 255, 255, 0.5);
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
    color: white;
  }
`
