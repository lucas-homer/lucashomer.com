import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Smiley from "../components/smiley"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>It me</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Smiley />
    </div>
  </Layout>
)

export default SecondPage
