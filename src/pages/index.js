import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Home/Intro"
import AboutMe from "../components/about/about"
import Projects from "../components/projects/projects"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Intro />
      <AboutMe />
      <Projects primary={true} />
    </Layout>
  )
}
export default IndexPage
