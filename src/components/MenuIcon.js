import React from "react"

const SvgComponent = props => (
  <svg viewBox="0 0 124.9 66.48" {...props}>
    <g data-name="Layer 2">
      <text
        transform="matrix(.95 0 0 1 0 59.48)"
        fontSize="21px"
        fill="#54264d"
        fontFamily="WorkSans-Light,Work Sans"
        fontWeight={300}
      >
        <tspan letterSpacing="-.01em">{"Lucas"}</tspan>
        <tspan x={64.01} y={0} letterSpacing="-.01em">
          {"Homer"}
        </tspan>
      </text>
      <g data-name="Layer 1">
        <path id="red" fill="#f15c50" d="M20.88 36L41.66 0 0.1 0 20.88 36z" />
        <path
          id="yellow"
          fill="#f2e52e"
          d="M104.02 36L124.8 0 83.23 0 104.02 36z"
        />
        <path
          id="blue"
          fill="#00a6a6"
          d="M62.45 0L41.66 36 83.23 36 62.45 0z"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
