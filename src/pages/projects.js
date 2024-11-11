import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects/projects"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="projects I've worked on">
        <link rel="canonical" href="https://www.mouhsni.com/projects/" />
      </Seo>
      <Projects primary={false} />
    </Layout>
  )
}
export default AboutPage
