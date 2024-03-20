import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects/projects"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="projects I've worked on" />
      <Projects primary={false} />
    </Layout>
  )
}
export default AboutPage
