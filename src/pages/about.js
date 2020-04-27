import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Home/Intro"
import AboutMe from "../components/about/about"
import Experience from "../components/about/Experience"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="about" />
      <AboutMe />
      <Experience />
    </Layout>
  )
}
export default AboutPage
