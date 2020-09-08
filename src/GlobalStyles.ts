import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: white no-repeat;
    background-attachment: fixed;
  }

  *, button {
    border: 0;
    outline: 0;

    font-family: industry-inc-base;
  }

  input {
    border: 2px solid black;
    outline: 0;
    padding: 0 5px;
  }

  a {
    text-decoration: none;
    color: black;
    z-index: 80;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  h1, h2 {
    font-weight: normal;
  }

  :root {
    font-size: 62.5%;
    --green: #3DFB03;
  }

  
`
