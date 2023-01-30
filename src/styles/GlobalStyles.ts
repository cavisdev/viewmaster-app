import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    font-family: "Inter", sans-serif;
    font-size: 16px;
}
`

export {GlobalStyle}