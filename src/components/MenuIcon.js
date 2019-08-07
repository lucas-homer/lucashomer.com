import React, { useState, useEffect } from "react"
import posed from "react-pose"

const SVG = posed.svg({
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -500 },
})

const SvgComponent = props => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [isVisible])
  return (
    <SVG viewBox="0 0 124.9 66.48" pose={isVisible ? "enter" : "exit"}>
      <g data-name="Layer 2">
        <text
          transform="matrix(.95 0 0 1 0 59.48)"
          fontSize="1.2rem"
          fill="#262626"
          fontFamily="WorkSans-Light,Work Sans, Helvetica"
          fontWeight={300}
        >
          <tspan letterSpacing="-.01em">{"Lucas"}</tspan>
          <tspan x={64.01} y={0} letterSpacing="-.01em">
            {"Homer"}
          </tspan>
        </text>
        <g data-name="Layer 1">
          <path fill="#f15c50" d="M20.88 36L41.66 0 0.1 0 20.88 36z" />
          <path fill="#f2e52e" d="M104.02 36L124.8 0 83.23 0 104.02 36z" />
          <path fill="#00a6a6" d="M62.45 0L41.66 36 83.23 36 62.45 0z" />
        </g>
      </g>
    </SVG>
  )
}

export default SvgComponent
