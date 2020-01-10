import React from "react"
import styled from "styled-components"
import { FramerAnimator, variants2 } from "../../shared/Animations"
import { GrayTitle, LightTitle } from "../styles/theme"

const Experience = () => (
  <ExperienceWrapper>
    <FramerAnimator>
      <GrayTitle>PORTFOLIO</GrayTitle>
    </FramerAnimator>
    <FramerAnimator variants={variants2}>
      <LightTitle>Where I've Worked</LightTitle>
    </FramerAnimator>
    <div>
      <ExperienceLine>
        <Desc>
          <h4>
            UX &amp; Interaction Designer <span> - Google Company</span>
          </h4>
          <Location>
            Developed and shipped highly interactive web applications for Apple
            using ReactJS.
          </Location>
          <Location>
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </Location>
        </Desc>
        <Year>
          <p>2017 - Present</p>
        </Year>
      </ExperienceLine>
      <ExperienceLine>
        <Desc>
          <h4>
            UX &amp; Interaction Designer <span> - Google Company</span>
          </h4>
          <Location>
            Collaborated with a small team of student designers to spearhead a
            new brand and design system for Scout’s inaugural student-led design
            conference at Northeastern
          </Location>
          <Location>
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            Gatsby, React, Craft, Wordpress, Prismic, and Netlify
          </Location>
        </Desc>
        <Year>
          <p>2017 - Present</p>
        </Year>
      </ExperienceLine>
      <ExperienceLine>
        <Desc>
          <h4>
            UX &amp; Interaction Designer <span> - Google Company</span>
          </h4>
          <Location>
            Worked closely with designers and management team to develop,
            document, and manage the conference’s marketing website using
            Jekyll, Sass, and JavaScript
          </Location>
        </Desc>
        <Year>
          <p>2017 - Present</p>
        </Year>
      </ExperienceLine>
      <ExperienceLine>
        <Desc>
          <h4>
            UX &amp; Interaction Designer <span> - Google Company</span>
          </h4>
          <Location>
            Interfaced with user experience designers and other developers to
            ensure thoughtful and coherent user experiences across Starry’s iOS
            and Android mobile apps
          </Location>
        </Desc>
        <Year>
          <p>2017 - Present</p>
        </Year>
      </ExperienceLine>
      <ExperienceLine>
        <Desc>
          <h4>
            UX &amp; Interaction Designer <span> - Google Company</span>
          </h4>
          <Location>
            Developed and maintained code for in-house and client websites
            primarily using HTML, CSS, Sass, JavaScript, and jQuery
          </Location>
        </Desc>
        <Year>
          <p>2017 - Present</p>
        </Year>
      </ExperienceLine>
    </div>
  </ExperienceWrapper>
)

export default Experience

const ExperienceWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 4em 0;
`
const ExperienceLine = styled.div`
  padding: 1.2rem 0;
  margin-bottom: 1.5em;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparent};
  &:first-child {
    padding-top: 3em;
  }

  &:last-child {
    border-bottom: 0;
  }
`
const Desc = styled.div`
  flex-grow: 1;
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
`
const Location = styled.p`
  line-height: 150%;
  font-size: 0.9em;
`

const Year = styled.div`
  width: 30%;
  text-align: right;
`
