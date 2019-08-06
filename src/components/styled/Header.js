import styled from "styled-components"

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  .logo {
    width: 12%;
    min-width: 75px;
    margin: 1rem;
  }
  menu {
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
  }
  h3 {
    color: black;
    margin-left: 1rem;
    &:hover {
      transform: translateY(-5%);
    }
  }
`
