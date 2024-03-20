import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutMe from "../components/about/about"
import Experience from "../components/about/Experience"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="about me" />
      <AboutMe />
      <Experience />
    </Layout>
  )
}
export default AboutPage
