import styled from "styled-components"

export const FooterContainer = styled.footer`
  text-align: center;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.dark};
  padding: 6em 0;
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

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.gray};
  }
`
