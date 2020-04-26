import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/Home/Intro"
import AboutMe from "../components/about/about"
import Experience from "../components/about/Experience"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <AboutMe />
      <Experience />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  )
}
export default IndexPage
