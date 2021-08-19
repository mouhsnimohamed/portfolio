import styled from "styled-components"

export const FooterContainer = styled.footer`
  text-align: center;
  z-index: 1;
  position: relative;
  font-size: 16px;
  // background: ${({ theme }) => theme.colors.dark};
  padding: 6em 2em;
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
    margin: 0 5px;
    font-size: 21px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.gray};
  }
`
