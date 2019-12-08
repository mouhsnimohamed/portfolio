import styled from "styled-components"

export const FooterContainer = styled.footer`
  text-align: center;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.black};
  padding: 8em 0;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`
export const SocialItem = styled.div`
  margin: 0 5px;
`
export const SocialLink = styled.a`
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

export const GetInTouch = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
`
export const MailMe = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 26px;
  font-weight: 400;
  line-height: 42px;
  color: rgb(255, 255, 255);
  margin-bottom: 50px;
`

export const Copyright = styled.p`
  [class^="icon-"] {
    color: red;
    margin-left: 10px;
    font-size: 22px;
  }
`
