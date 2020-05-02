import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects/projects"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="portfolio" />
      <Projects />
    </Layout>
  )
}
export default AboutPage
