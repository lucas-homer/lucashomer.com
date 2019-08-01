import styled from "styled-components"

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  #logo {
    width: 12%;
    margin: 2rem;
  }
  #menu {
    display: flex;
    padding: 2.5rem;
  }
  h3 {
    color: black;
    margin: 0 1rem;
    &:hover {
      transform: translateY(-5%);
    }
  }
`
