import React from "react"

const SvgComponent = props => (
  <svg viewBox="0 0 124.9 66.48" {...props}>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <text
          transform="matrix(.95 0 0 1 0 59.48)"
          fontSize="21px"
          fill="#54264d"
          fontFamily="WorkSans-Light,Work Sans"
          fontWeight={300}
        >
          <tspan letterSpacing="-.02em">{"L"}</tspan>
          <tspan x={11.53} y={0}>
            {"ucas "}
          </tspan>
          <tspan x={64.01} y={0} letterSpacing="-.01em">
            {"H"}
          </tspan>
          <tspan x={78.87} y={0}>
            {"ome"}
          </tspan>
          <tspan x={123.16} y={0} letterSpacing="-.02em">
            {"r"}
          </tspan>
        </text>
        <path fill="#f15c50" d="M20.88 36L41.66 0 0.1 0 20.88 36z" />
        <path fill="#f2e52e" d="M104.02 36L124.8 0 83.23 0 104.02 36z" />
        <path fill="#00a6a6" d="M62.45 0L41.66 36 83.23 36 62.45 0z" />
      </g>
    </g>
  </svg>
)

export default SvgComponent
