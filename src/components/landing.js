import React from "react"
import { LandingStyles } from "./styled/LandingStyles"
import Image from "../components/image"

export default function Landing() {
  return (
    <LandingStyles>
      <h1>Hi people</h1>
      <p>Welcome to my website</p>
      <div style={{ marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </LandingStyles>
  )
}
