import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/about/about"
import Experience from "../components/about/Experience"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="about me" />
      <AboutMe />
      <Experience />
    </Layout>
  )
}
export default AboutPage
