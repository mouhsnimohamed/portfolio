import React from "react"
import styled from "styled-components"
import { FramerAnimator, variants2 } from "../../shared/Animations"
import { GrayTitle, LightTitle, Highlighted } from "../styles/theme"

const Experience = () => {
  return (
    <ExperienceWrapper>
      <FramerAnimator>
        <GrayTitle>EXPERIENCE</GrayTitle>
      </FramerAnimator>
      <FramerAnimator variants={variants2}>
        <LightTitle>Where I've Worked</LightTitle>
      </FramerAnimator>
      <div>
        <ExperienceLine>
          <Desc>
            <h4>
              Full Stack developer{" "}
              <span>
                <code> - </code>Self-employed
              </span>
            </h4>
            <Location>
              I worked for so many clients as a freelancer,
              <br /> below the details :
            </Location>
          </Desc>
          <Year>
            <p>2018 - Present</p>
          </Year>
          <Child>
            <ExperienceLine>
              <Desc>
                <h4>
                  Tech Lead
                  <span>
                    <code> - </code>EURAFRIC Information
                  </span>
                </h4>
                <Location>
                  Develop a highly interactive Mobile and Web application for
                  BMCE Euroservices | BANK OF AFRIC using React Native framwork
                </Location>
              </Desc>
              <Year>
                <p>Aug 2020 - Present</p>
              </Year>
            </ExperienceLine>
          </Child>
          <Child>
            <ExperienceLine>
              <Desc>
                <h4>
                  Expert Front End developer
                  <span>
                    <code> - </code>EURAFRIC Information
                  </span>
                </h4>
                <Location>
                  Develop a highly interactive web application for business
                  credit for BANK OF AFRICA using React, Redux, Redux Saga,
                  MaterialUI, react testing library and jest for testing
                </Location>
              </Desc>
              <Year>
                <p>Oct 2019 - Mar 2020</p>
              </Year>
            </ExperienceLine>
          </Child>
          <Child>
            <ExperienceLine>
              <Desc>
                <h4>
                  MERN Stack developer
                  <span>
                    <code> - </code>x-hub.io
                  </span>
                </h4>
                <Location>
                  Within the company xhub, I had the chance to work with the
                  best developers in Morocco that I learned a lot from them on
                  different technologies such as docker, spring boot, and
                  agility
                </Location>
                <Location>
                  Developed the twitter-Wall application (Front-end and
                  back-end) which can display a list of tweets based on a
                  configurable hashtag in the backoffice.
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter-wall.dev.x-hub.io"
                  >
                    <Highlighted>https://twitter-wall.dev.x-hub.io</Highlighted>
                  </a>
                </Location>
                <Location>
                  Develped and redesign the new site of Xhub using with
                  Gatsbyjs.
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x-hub.io"
                  >
                    <Highlighted>https://x-hub.io/</Highlighted>
                  </a>
                </Location>
                <Location>
                  Collaboration with other front-end and back-end developers to
                  develop a web application using the ReactJS and Redux JS
                  framework for the <br />
                  <Highlighted>BANK OF AFRICA</Highlighted>
                </Location>
                <Location>
                  Cutting and integration of the GUI of the{" "}
                  <Highlighted>GHUB</Highlighted> platform with Photoshop taking
                  into account the responsive mode (mobile, tablet, desktop).
                </Location>
                <Location>
                  Developed a desktop application using Electronjs and Reactjs
                  for <br />
                  <Highlighted>AG2Rlamondiale</Highlighted>
                </Location>
              </Desc>
              <Year>
                <p>Dec 2018 - Sep 2019</p>
              </Year>
            </ExperienceLine>
          </Child>
        </ExperienceLine>
        <ExperienceLine>
          <Desc>
            <h4>
              Front end Developer{" "}
              <span>
                <code> - </code>Gentis Recruitment
              </span>
            </h4>
            <Location>
              Collaborated with a team of 10 members including designers
              develpers, manager and product owner to spearhead a new brand and
              design a Smart Career Management Platform.
              <br />
              <Highlighted>hireme.io</Highlighted>
            </Location>
            <Location>
              Work with a variety of different languages, frameworks, such as
              JavaScript, React, GatsbyJS and NextJS.
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hireme.io/"
              >
                <Highlighted>https://hireme.io/</Highlighted>
              </a>
            </Location>
          </Desc>
          <Year>
            <p>Aug 2016 - Oct 2018</p>
          </Year>
        </ExperienceLine>
        <ExperienceLine>
          <Desc>
            <h4>
              Front end Developer{" "}
              <span>
                <code> - </code>Agence Oneo
              </span>
            </h4>
            <Location>
              Worked closely with designers and management team to develop and
              maintain, an exitsing platform based on Drupaly CMS
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.flyer.be/befr"
              >
                <Highlighted>https://www.flyer.be/befr</Highlighted>
              </a>
            </Location>
          </Desc>
          <Year>
            <p>Apr 2014 - Aug 2016</p>
          </Year>
        </ExperienceLine>
        <ExperienceLine>
          <Desc>
            <h4>
              Front end Designer{" "}
              <span>
                <code> - </code>VOID
              </span>
            </h4>
            <Location>
              Developed and maintained code for in-house and client websites
              primarily using HTML, CSS, Sass, JavaScript, and jQuery
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.void.fr"
              >
                <Highlighted>https://www.void.fr</Highlighted>
              </a>
            </Location>
          </Desc>
          <Year>
            <p>Fev 2013 - Mar 2014</p>
          </Year>
        </ExperienceLine>
      </div>
    </ExperienceWrapper>
  )
}

export default Experience

const ExperienceWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 4em 0;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    padding-bottom: 0;
  }
`
const ExperienceLine = styled.div`
  padding: 1.2rem 0;
  margin-bottom: 1.5em;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparent};
  &:first-child {
    padding-top: 3em;
  }

  &:last-child {
    border-bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.phone} {
    flex-wrapper: wrap;
  }
`
const Desc = styled.div`
  width: 70%;
  padding-right: 3em;
  h4 {
    margin-bottom: 1em;
    font-size: 1.3em;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
  }
  span {
    font-weight: 300;
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ theme }) => theme.breakpoints.phone} {
    width: 100%;
    padding: 0;
    order: 1;
    code {
      display: none;
    }
    span {
      display: block;
    }

    h4 {
      margin-bottom: 30px;
    }
  }
`
const Location = styled.p`
  line-height: 150%;
  font-size: 0.85em;
  margin-bottom: 1em;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Year = styled.div`
  width: 30%;
  text-align: right;
  p {
    margin: 0;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    order: 0;
    text-align: left;
  }
`

const Child = styled.div`
  padding-left: 25px;
  order: 2;
  h4 {
    font-size: 110%;
  }

  ${ExperienceLine} {
    padding: 0.8rem 0;
    margin-bottom: 0;
  }
`
