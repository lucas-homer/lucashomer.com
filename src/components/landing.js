import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import posed from "react-pose"
import { LandingStyles } from "./styled/LandingStyles"

const PressableImage = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.9 },
})

function Landing() {
  const [imageSelection, setImageSelection] = useState(true)

  const data = useStaticQuery(graphql`
    query {
      straightForwardImage: file(
        relativePath: { eq: "500x500px_headshot.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lookingUpImage: file(relativePath: { eq: "Smiley.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LandingStyles>
      <h1>Hi people</h1>
      <p>Welcome to my website</p>
      <PressableImage
        style={{
          marginBottom: "1.45rem",
          cursor: "pointer",
        }}
        onClick={() => setImageSelection(!imageSelection)}
      >
        <Img
          fluid={
            imageSelection
              ? data.straightForwardImage.childImageSharp.fluid
              : data.lookingUpImage.childImageSharp.fluid
          }
          style={{ maxWidth: "200px", borderRadius: "50%" }}
        />
      </PressableImage>
    </LandingStyles>
  )
}

export default Landing
